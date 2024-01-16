import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBookingNotification } from '../../../models/entities/interfaces/IBookingNotification';
import { BookingService } from '../../services/data-sharing/booking.service';

@Component({
  selector: 'app-booking-notification',
  templateUrl: './booking-notification.component.html',
  styleUrls: ['./booking-notification.component.scss'],
})
export class BookingNotificationComponent {
  public get bookingNotifications(): IBookingNotification[] {
    return this.bookingService.bookingNotifications;
  }

  constructor(private bookingService: BookingService) {}

  createBooking(booking: IBookingNotification) {
    this.bookingService.addBooking(booking);
    // Optionally, clear the booking form or navigate away

    // Find the index of the booking in the array
    const index = this.bookingService.bookingNotifications.findIndex((b) => b.id === booking.id);

    // If found, remove the booking from the array
    if (index !== -1) {
      this.bookingService.bookingNotifications.splice(index, 1);
    }
  }
}
