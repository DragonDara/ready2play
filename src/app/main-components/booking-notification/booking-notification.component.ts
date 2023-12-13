import { Component, OnInit } from '@angular/core';
import { IBookingNotification } from '../../models/entities/interfaces/IBookingNotification';
import { BookingService } from '../../services/data-sharing/booking.service';
import { Device } from '../../models/device.enum';

@Component({
  selector: 'app-booking-notification',
  templateUrl: './booking-notification.component.html',
  styleUrls: ['./booking-notification.component.scss']
})
export class BookingNotificationComponent implements OnInit {

  public bookingNotifications: IBookingNotification[] = [
    {
      id: 1,
      userName: "Darkhan",
      zone: "Standard room",
      tariff: "Ночной",
      device: {
        type: Device.PC,
        number: 1,
      },
      timeFrom: new Date(2023, 12, 12, 21, 30, 0),
      timeTo: new Date(2023, 12, 12, 23, 30, 0)
    },
    {
      id: 2,
      userName: "Nurlan",
      zone: "Playstation room",
      tariff: "Ночной",
      device: {
        type: Device.PS,
        number: 1,
      },
      timeFrom: new Date(2023, 12, 12, 21, 30, 0),
      timeTo: new Date(2023, 12, 12, 23, 30, 0)
    }
  ]
  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit() {
  }

  createBooking(booking: IBookingNotification) {
    this.bookingService.addBooking(booking);
    // Optionally, clear the booking form or navigate away
  }

}




