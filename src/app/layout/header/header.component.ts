import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingNotificationComponent } from '../../main-components/booking-notification/booking-notification.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hidden: boolean = false;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog() {
    this.hidden = !this.hidden;

    this.dialog.open(BookingNotificationComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}
