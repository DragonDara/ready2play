import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDevice } from '../../../models/entities/interfaces/IDevice';
import { IBookingNotification } from '../../../models/entities/interfaces/IBookingNotification';

@Component({
  selector: 'app-device-bookings',
  templateUrl: './device-bookings.component.html',
  styleUrls: ['./device-bookings.component.scss'],
})
export class DeviceBookingsComponent implements OnInit {
  bookings: IBookingNotification[];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      deviceNumber: number;
      selectedDeviceBookings: IBookingNotification[];
    },
  ) {
    this.bookings = data.selectedDeviceBookings;
  }

  ngOnInit() {
    // Fetch and display bookings for this.device
  }
}
