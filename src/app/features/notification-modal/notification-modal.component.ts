import { Component } from '@angular/core';
import { IBookingNotification } from '../../models/entities/interfaces/IBookingNotification';
import { BookingService } from '../../shared/services/data-sharing/booking.service';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrl: './notification-modal.component.scss',
})
export class NotificationModalComponent {
  constructor(private bookingService: BookingService) {}

  public get bookingNotifications(): IBookingNotification[] {
    return this.bookingService.bookingNotifications;
  }
}
