import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBookingNotification } from '../../models/entities/interfaces/IBookingNotification';
import { BookingService } from '../../shared/services/data-sharing/booking.service';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrl: './notification-modal.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class NotificationModalComponent implements OnDestroy {

  actionEmitter = new EventEmitter<IBookingNotification>();
  constructor(
    private bookingService: BookingService,
    @Inject(MAT_DIALOG_DATA)
    public pendingBookings: IBookingNotification[],
    ) {}

  ngOnInit(): void {
    this.bookingService.pendingBookingSource.subscribe({
      next: (bookings) => {
        this.pendingBookings = bookings
      }
    })
  }

  onAction(booking: IBookingNotification): void {
    this.pendingBookings = this.pendingBookings.filter((b) => b.id !== booking.id);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
