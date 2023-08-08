import { Injectable, NgZone } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import StreamDataInterface from './event-stream-interface';
import { SseService } from './sse.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataStreamService {
  constructor(private _zone: NgZone, private _sseService: SseService) {}

  getServerSentEvent(url: string) {
    return new Observable((observer: Observer<StreamDataInterface>) => {
      const eventSoruce = this._sseService.getEventSource(url);

      eventSoruce.addEventListener('upsert', (event) => {
        const messageEvent = event as MessageEvent;
        const data: StreamDataInterface = {
          id: messageEvent.lastEventId,
          event: 'upsert',
          data: messageEvent.data,
        };
        this._zone.run(() => {
          observer.next(data);
        });
      });

      eventSoruce.addEventListener('delete', (event) => {
        const messageEvent = event as MessageEvent;
        const data: StreamDataInterface = {
          id: messageEvent.lastEventId,
          event: 'delete',
          data: messageEvent.data,
        };
        this._zone.run(() => {
          observer.next(data);
        });
      });

      eventSoruce.addEventListener('message', (event) => {
        const messageEvent = event as MessageEvent;
        const data: StreamDataInterface = {
          event: 'keep-alive',
          data: messageEvent.data,
        };
        this._zone.run(() => {
          observer.next(data);
        });
      });

      eventSoruce.onerror = (event) => {
        this._zone.run(() => {
          observer.error(event);
        });
      };
    });
  }
}
