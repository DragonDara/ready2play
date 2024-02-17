import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, getCountFromServer, query, updateDoc, where } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { BookingNotification } from '../../../models/entities/classes/BookingNotification';
import { IBookingNotification } from '../../../models/entities/interfaces/IBookingNotification';
import { BookingStatus } from '../../../models/enums/bookingStatus.enum';
import { DeviceEnum } from '../../../models/enums/device.enum';
import { DeviceMode } from '../../../models/enums/deviceMode.enum';
import { Devices } from '../../components/grid/grid.component';
import { TariffsService } from '../tariffs.service';
import { GamingCentersService } from '../gaming-centers.service';
import { DevicesService } from '../devices.service';

@Injectable({
  providedIn: 'root',
  deps: [Firestore]
})
export class BookingService {

  private _acceptedBookings!: IBookingNotification[]


  public get acceptedBookings() : IBookingNotification[] {
    return this._acceptedBookings
  }


  public set acceptedBookings(b: IBookingNotification[]) {
    this._acceptedBookings = b;
  }


  public pendingBookingSource = new Subject<IBookingNotification[]>();
  private bookingsSource = new BehaviorSubject<IBookingNotification[]>([]);

  constructor(
    private firestore: Firestore,
    private tariffsService: TariffsService,
    private gamingCentersService: GamingCentersService,
    private devicesService: DevicesService
  ) {
  }

  getBookings(gamingCenterId: number, status: BookingStatus): Observable<BookingNotification[]> {
    const bookingsRef = collection(this.firestore, "bookings");
    const q = query(bookingsRef, where("gamingCenterId", "==", gamingCenterId.toString()), where("status", "==", status));

    return collectionData(q).pipe(
      map(actions => {
        const bookings = actions.map(a => {
          const tariffName = this.tariffsService.getTariffNameByIdFromMemory(a["tariffId"]);
          const zone = this.gamingCentersService.getZoneByZoneIdFromMemory(+a["zoneId"]);
          const device = this.devicesService.devicesByZone.get(+a["zoneId"])!.find(d => d.number === a["deviceId"])!
          const booking = new BookingNotification(a["id"], a["username"], a["status"], zone, device, new Date(a["timeFrom"].toDate()), new Date(a["timeTo"].toDate()), tariffName, a["phoneNumber"]);
          return booking;
          }
        )
        return bookings;
      }
      )
    )
  }

  addBooking(booking: IBookingNotification): void {
    updateDoc(
      doc(collection(this.firestore, "bookings"), booking.id.toString()),
      {
        status: BookingStatus.Accepted
      }
    ).then(
      _ => {
        booking.device.mode = DeviceMode.Reserved;
        booking.status = BookingStatus.Accepted;

        const currentBookings = this.bookingsSource.getValue();
        this.bookingsSource.next([...currentBookings, booking]);
      }
    ).catch(
      err => console.error(err)
    )

  }

  rejectBooking(booking: IBookingNotification) {
    updateDoc(
      doc(collection(this.firestore, "bookings"), booking.id.toString()),
      {
        status: BookingStatus.Rejected
      }
    ).then(
      _ => _
    ).catch(
      err => console.error(err)
    )
  }
  getBookingsForDeviceTypeAndNumber(type: DeviceEnum, number: number): IBookingNotification[] {
    return this.bookingsSource
      .getValue()
      .filter((b) => b.device.type === type && b.device.number === number);
  }

  getAcceptedBookings(type: DeviceEnum, number: number, bookingStatus: BookingStatus): IBookingNotification[] {
    return this._acceptedBookings
      .filter((b) => b.device.type === type && b.device.number === number && b.status === bookingStatus);
  }
}
