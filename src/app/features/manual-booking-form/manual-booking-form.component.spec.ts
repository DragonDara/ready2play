/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ManualBookingFormComponent } from './manual-booking-form.component';

describe('ManualBookingFormComponent', () => {
  let component: ManualBookingFormComponent;
  let fixture: ComponentFixture<ManualBookingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualBookingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
