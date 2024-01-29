import { Component, Input } from '@angular/core';
import { BookingService } from '../../shared/services/data-sharing/booking.service';
import { IBookingNotification } from '../../models/entities/interfaces/IBookingNotification';
import { DeviceMode } from '../../models/enums/deviceMode.enum';

@Component({
  selector: 'app-card-booking',
  templateUrl: './card-booking.component.html',
  styleUrl: './card-booking.component.scss',
})
export class CardBookingComponent {
  @Input() booking?: IBookingNotification;
  constructor(private bookingService: BookingService) {}

  createBooking(booking?: IBookingNotification) {
    if (booking) {
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

  rejectBooking(booking?: IBookingNotification) {
    if(booking) {
      this.bookingService.rejectBooking(booking.id)

      // Find the index of the booking in the array
      const index = this.bookingService.bookingNotifications.findIndex((b) => b.id === booking.id);

      // If found, remove the booking from the array
      if (index !== -1) {
        this.bookingService.bookingNotifications.splice(index, 1);
      }
    }
  }
}
