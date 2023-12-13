import { Injectable } from "@angular/core";
import { IBookingNotification } from "../../models/entities/interfaces/IBookingNotification";
import { BehaviorSubject } from "rxjs";
import { Device } from "../../models/device.enum";

@Injectable({
    providedIn: 'root'
})
export class BookingService {
  private bookingsSource = new BehaviorSubject<IBookingNotification[]>([]);
  currentBookings = this.bookingsSource.asObservable();

  constructor() { }

  addBooking(booking: IBookingNotification) {
    const currentBookings = this.bookingsSource.getValue();
    this.bookingsSource.next([...currentBookings, booking]);
  }

  getBookingsForDeviceTypeAndNumber(type: Device, number: number): IBookingNotification[] {
    return this.bookingsSource.getValue().filter(b => b.device.type === type && b.device.number === number);
  }
}
