import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { BookingNotification } from '../../../models/entities/classes/BookingNotification';
import { IBookingNotification } from '../../../models/entities/interfaces/IBookingNotification';
import { BookingStatus } from '../../../models/enums/bookingStatus.enum';
import { DeviceEnum } from '../../../models/enums/device.enum';
import { DeviceMode } from '../../../models/enums/deviceMode.enum';
import { Devices } from '../../components/grid/grid.component';
import { TariffsService } from '../tariffs.service';

@Injectable({
  providedIn: 'root',
  deps: [Firestore]
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

  constructor(
    private firestore: Firestore,
    private tariffsService: TariffsService
  ) {
  }

  getBookingsByGamingCenterId(gamingCenterId: number): Observable<BookingNotification[]> {
    const bookingsRef = collection(this.firestore, "bookings");
    const q = query(bookingsRef, where("gamingCenterId", "==", gamingCenterId.toString()));

    return collectionData(q).pipe(
      map(actions => actions.map(a => {
        const tariffName = this.tariffsService.getTariffNameByIdFromMemory(a["tariffId"]);
        console.log(tariffName);
        const booking = new BookingNotification(a["id"], a["username"], a["status"], a["zoneId"], a["deviceId"], new Date(a["timeFrom"].toDate()), new Date(a["timeTo"].toDate()), tariffName)
        return booking;
        }
      )
      )
    )
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
