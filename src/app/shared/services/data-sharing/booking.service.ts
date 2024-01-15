import { Injectable } from '@angular/core';
import { IBookingNotification } from '../../../models/entities/interfaces/IBookingNotification';
import { BehaviorSubject } from 'rxjs';
import { Device } from '../../../models/device.enum';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  public bookingNotifications: IBookingNotification[] = [
    {
      id: 1,
      userName: 'Darkhan',
      zone: 'Standard room',
      tariff: 'Ночной',
      device: {
        type: Device.PC,
        number: 1,
      },
      timeFrom: new Date(2023, 12, 12, 21, 30, 0),
      timeTo: new Date(2023, 12, 12, 23, 30, 0),
    },
    {
      id: 2,
      userName: 'Nurlan',
      zone: 'Playstation room',
      tariff: 'Ночной',
      device: {
        type: Device.PS,
        number: 1,
      },
      timeFrom: new Date(2023, 12, 12, 21, 30, 0),
      timeTo: new Date(2023, 12, 12, 23, 30, 0),
    },
  ];

  private bookingsSource = new BehaviorSubject<IBookingNotification[]>([]);
  currentBookings = this.bookingsSource.asObservable();

  constructor() {}

  addBooking(booking: IBookingNotification) {
    const currentBookings = this.bookingsSource.getValue();
    this.bookingsSource.next([...currentBookings, booking]);
  }

  getBookingsForDeviceTypeAndNumber(type: Device, number: number): IBookingNotification[] {
    return this.bookingsSource
      .getValue()
      .filter((b) => b.device.type === type && b.device.number === number);
  }
}
