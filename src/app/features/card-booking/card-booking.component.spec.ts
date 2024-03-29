import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBookingComponent } from './card-booking.component';

describe('CardBookingComponent', () => {
  let component: CardBookingComponent;
  let fixture: ComponentFixture<CardBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
