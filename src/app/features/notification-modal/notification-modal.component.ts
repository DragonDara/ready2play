import { Component, OnDestroy } from '@angular/core';
import { IBookingNotification } from '../../models/entities/interfaces/IBookingNotification';
import { BookingService } from '../../shared/services/data-sharing/booking.service';
import { Firestore } from '@angular/fire/firestore';
import { BookingNotification } from '../../models/entities/classes/BookingNotification';
import { Observable, tap } from 'rxjs';
import { BookingStatus } from '../../models/enums/bookingStatus.enum';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrl: './notification-modal.component.scss',
})
export class NotificationModalComponent implements OnDestroy {

  public bookingNotifications$!: Observable<BookingNotification[]>;
  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingNotifications$ = this.bookingService.getBookings(1, BookingStatus.Pending)

  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
