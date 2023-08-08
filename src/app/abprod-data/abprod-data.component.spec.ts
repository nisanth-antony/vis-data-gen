import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbprodDataComponent } from './abprod-data.component';

describe('AbprodDataComponent', () => {
  let component: AbprodDataComponent;
  let fixture: ComponentFixture<AbprodDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbprodDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbprodDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
