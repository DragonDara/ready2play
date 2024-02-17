import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { routeHeaderTextDictionary } from '../../constants/route-header-text-dictionary';
import { HeaderService } from '../../services/header.service';
import { filter, map, startWith } from 'rxjs';
import { NotificationModalComponent } from '../../../features/notification-modal/notification-modal.component';
import { ManualBookingFormComponent } from '../../../features/manual-booking-form/manual-booking-form.component';
import { BookingService } from '../../services/data-sharing/booking.service';
import { BookingStatus } from '../../../models/enums/bookingStatus.enum';
import { IBookingNotification } from '../../../models/entities/interfaces/IBookingNotification';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hidden = true;
  pendingBookingCount!: number;

  pendingBookings!: IBookingNotification[]

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private headerService: HeaderService,
    private bookingService: BookingService,
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((value) => value instanceof NavigationEnd),
        map((value) => (value as NavigationEnd).url),
        startWith(this.router.url),
        map((value: string) => routeHeaderTextDictionary.get(value)),
        filter((value) => Boolean(value)),
      )
      .subscribe((headerText) => {
        this.headerService.header.next(headerText as string);
      });

  }

  ngAfterViewInit(): void {
    // TODO: Huge custom code. Need to refactor!!!!!
    setTimeout(() => {
      this.bookingService.getBookings(1, BookingStatus.Pending)
      .subscribe({
        next: (bookings) => {
          if(bookings.length === 0){
            this.hidden = true
          }
          else{
            this.hidden = false
            this.pendingBookings = bookings
            this.pendingBookingCount = bookings.length
            this.bookingService.pendingBookingSource.next(this.pendingBookings);

          }
        },
        error: (err) => console.error(err)
      })
    }, 2000)
  }

  openDialog() {

    const dialog = this.dialog.open(NotificationModalComponent, {
      panelClass: 'modal-notification',
      position: { right: '0'},
      data: this.pendingBookings
    });

  }

  onManualBooking() {
    this.dialog.open(ManualBookingFormComponent, {
      panelClass: 'manual-class'
    })
  }
}
