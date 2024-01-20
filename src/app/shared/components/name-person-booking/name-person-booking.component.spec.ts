import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePersonBookingComponent } from './name-person-booking.component';

describe('NamePersonBookingComponent', () => {
  let component: NamePersonBookingComponent;
  let fixture: ComponentFixture<NamePersonBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NamePersonBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NamePersonBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
