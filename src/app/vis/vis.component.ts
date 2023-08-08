import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Subscription, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import StreamDataInterface from '../event-stream-interface';
import { ProjectDataStreamService } from '../project-data-stream.service';

@Component({
  selector: 'app-vis',
  templateUrl: './vis.component.html',
  styleUrls: ['./vis.component.scss'],
})
export class VisComponent implements OnInit, AfterViewInit {
  @ViewChild('autoScroll')
  autoScroll!: ElementRef<HTMLDivElement>;

  visForm = this.fb.group({
    worksiteId: ['', Validators.required],
    cursor: [new Date().toISOString(), Validators.required],
  });

  subscription!: Subscription;
  events: Array<StreamDataInterface> = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private zone: NgZone,
    private eventStreamService: ProjectDataStreamService,
    private router: Router
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.http
      .get(`${environment.smsApiUrl}/api/v0/worksite_directory`)
      .subscribe((res: any) => {
        this.visForm.get('worksiteId')?.setValue(res.data[0]['id']);
        this.visForm
          .get('cursor')
          ?.setValue(res.data[0]['project']['meta']['at']);
      });
  }

  startEventStream() {
    const url = `${environment.smsApiUrl}/api/v0/worksite/${
      this.visForm.get('worksiteId')?.value
    }/project_data_event_stream?cursor=${encodeURIComponent(
      this.visForm.get('cursor')?.value
    )}`;

    this.eventStreamService
      .getServerSentEvent(url)
      .pipe(
        tap(data => {
          console.log(data, new Date());
        }),
        map((data) => {     
          if (data.event !== 'keep-alive') {
            data.data = atob(data.data);
          }
          return data;
        })
      )
      .subscribe((event) => {
        this.events.push(event);
        if (this.autoScroll)
          this.autoScroll.nativeElement.scrollTop =
            this.autoScroll.nativeElement.scrollHeight;
      });
  }

  get cursor() {
    return this.visForm.get('cursor')?.value;
  }

  home() {
    this.router.navigate(['']);
  }
}
