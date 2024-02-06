import { Injectable } from '@angular/core';
import { IBookingNotification } from '../../../models/entities/interfaces/IBookingNotification';
import { BehaviorSubject } from 'rxjs';
import { DeviceEnum } from '../../../models/enums/device.enum';
import { DeviceMode } from '../../../models/enums/deviceMode.enum';
import { BookingStatus } from '../../../models/enums/bookingStatus.enum';
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
      status: BookingStatus.Pending,
      timeFrom: new Date(2023, 11, 12, 21, 30, 0),
      timeTo: new Date(2023, 11, 12, 23, 30, 0),
    },
    {
      id: 3,
      userName: 'Aikhan',
      zone: 'Standard room',
      tariff: 'Ночной',
      device: Devices[0],
      status: BookingStatus.Pending,
      timeFrom: new Date(2023, 11, 13, 10, 0, 0),
      timeTo: new Date(2023, 11, 13, 13, 0, 0),
    },
    {
      id: 2,
      userName: 'Nurlan',
      zone: 'Playstation room',
      tariff: 'Ночной',
      device: Devices[3],
      status: BookingStatus.Pending,

      timeFrom: new Date(2023, 11, 12, 21, 30, 0),
      timeTo: new Date(2023, 11, 12, 23, 30, 0),
    },
  ];

  private bookingsSource = new BehaviorSubject<IBookingNotification[]>([]);
  currentBookings = this.bookingsSource.asObservable();

  constructor() {
  }

  addBooking(booking: IBookingNotification) {
    booking.device.mode = DeviceMode.Reserved;
    booking.status = BookingStatus.Accepted;
    const currentBookings = this.bookingsSource.getValue();
    this.bookingsSource.next([...currentBookings, booking]);
  }

  rejectBooking(bookingId: number) {
    const currentBookings = this.bookingsSource.getValue();
    const bookingIndex = currentBookings.findIndex(b => b.id === bookingId);
    if (bookingIndex !== -1) {
      currentBookings[bookingIndex].status = BookingStatus.Rejected;
      this.bookingsSource.next(currentBookings);
    } else {
      console.error(`Booking with ID ${bookingId} not found.`);
    }
  }
  getBookingsForDeviceTypeAndNumber(type: DeviceEnum, number: number): IBookingNotification[] {
    return this.bookingsSource
      .getValue()
      .filter((b) => b.device.type === type && b.device.number === number);
  }

  getAcceptedBookings(type: DeviceEnum, number: number, bookingStatus: BookingStatus): IBookingNotification[] {
    return this.bookingsSource
      .getValue()
      .filter((b) => b.device.type === type && b.device.number === number && b.status === bookingStatus);
  }
}
