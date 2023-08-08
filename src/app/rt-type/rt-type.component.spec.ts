import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtTypeComponent } from './rt-type.component';

describe('RtTypeComponent', () => {
  let component: RtTypeComponent;
  let fixture: ComponentFixture<RtTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
