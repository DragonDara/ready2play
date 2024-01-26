import { Injectable } from '@angular/core';
import { IBookingNotification } from '../../../models/entities/interfaces/IBookingNotification';
import { BehaviorSubject } from 'rxjs';
import { Device } from '../../../models/enums/device.enum';
import { DeviceMode } from '../../../models/enums/deviceMode.enum';
import { Devices } from '../../components/grid/grid.component';

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
      device: Devices[0],
      timeFrom: new Date(2023, 11, 12, 21, 30, 0),
      timeTo: new Date(2023, 11, 12, 23, 30, 0),
    },
    {
      id: 3,
      userName: 'Aikhan',
      zone: 'Standard room',
      tariff: 'Ночной',
      device: Devices[0],
      timeFrom: new Date(2023, 11, 13, 10, 0, 0),
      timeTo: new Date(2023, 11, 13, 13, 0, 0),
    },
    {
      id: 2,
      userName: 'Nurlan',
      zone: 'Playstation room',
      tariff: 'Ночной',
      device: Devices[3],
      timeFrom: new Date(2023, 11, 12, 21, 30, 0),
      timeTo: new Date(2023, 11, 12, 23, 30, 0),
    },
  ];

  private bookingsSource = new BehaviorSubject<IBookingNotification[]>([]);
  currentBookings = this.bookingsSource.asObservable();

  constructor() {
  }

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
