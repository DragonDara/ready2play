import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingNotificationComponent } from '../../components/booking-notification/booking-notification.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  hidden = false;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.hidden = !this.hidden;

    this.dialog.open(BookingNotificationComponent, {
      minWidth: '400px',
      maxWidth: '400px',
      position: { top: '90px', right: '5px' },
    });
  }
}
