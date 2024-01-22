import { Component, OnDestroy } from '@angular/core';
import { IBookingNotification } from '../../models/entities/interfaces/IBookingNotification';
import { BookingService } from '../../shared/services/data-sharing/booking.service';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrl: './notification-modal.component.scss',
})
export class NotificationModalComponent implements OnDestroy {
  // @Input() test?: any;
  constructor(private bookingService: BookingService) {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  public get bookingNotifications(): IBookingNotification[] {
    return this.bookingService.bookingNotifications;
  }
}
