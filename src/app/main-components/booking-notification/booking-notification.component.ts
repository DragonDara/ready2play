import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-notification',
  templateUrl: './booking-notification.component.html',
  styleUrls: ['./booking-notification.component.scss']
})
export class BookingNotificationComponent implements OnInit {

  public bookingNotifications: IBookingNotification[] = [
    {
      userName: "Darkhan",
      zone: "Playstation room",
      tariff: "Ночной",
      deviceNumber: 2,
      timeFrom: new Date(2023, 12, 12, 21, 30, 0),
      timeTo: new Date(2023, 12, 12, 23, 30, 0)
    },
    {
      userName: "Nurlan",
      zone: "Playstation room",
      tariff: "Ночной",
      deviceNumber: 1,
      timeFrom: new Date(2023, 12, 12, 21, 30, 0),
      timeTo: new Date(2023, 12, 12, 23, 30, 0)
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}



interface IBookingNotification {
  userName: string;
  zone: string;
  deviceNumber: number;
  timeFrom: Date;
  timeTo: Date;
  tariff: string;
}
