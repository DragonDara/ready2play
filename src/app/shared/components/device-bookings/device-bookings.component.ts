import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBookingNotification } from '../../../models/entities/interfaces/IBookingNotification';

@Component({
  selector: 'app-device-bookings',
  templateUrl: './device-bookings.component.html',
  styleUrls: ['./device-bookings.component.scss'],
})
export class DeviceBookingsComponent implements OnInit {
  bookings: IBookingNotification[];
  currentBooking: IBookingNotification;
  nextBookings : {timeFrom: Date, timeTo: Date, username: string}[] = [];

  isViewAllBookings = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      deviceNumber: number;
      selectedDeviceBookings: IBookingNotification[];
    },
  ) {
    this.bookings = data.selectedDeviceBookings.slice(1, data.selectedDeviceBookings.length - 1);
    this.currentBooking = data.selectedDeviceBookings[0]
    this.nextBookings = data.selectedDeviceBookings.map(booking => {
      return {
        timeFrom: booking.timeFrom,
        timeTo: booking.timeTo,
        username: booking.userName
      }
    }).slice(0, 2)
  }

  ngOnInit() {
    // Fetch and display bookings for this.device
  }

  viewAllBookings(){
    this.isViewAllBookings = !this.isViewAllBookings;
  }
}
