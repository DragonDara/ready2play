import { Injectable } from "@angular/core";
import { IBookingNotification } from "../../models/entities/interfaces/IBookingNotification";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    private bookings: IBookingNotification[] = [];
    private bookingsSubject: BehaviorSubject<IBookingNotification[]> = new BehaviorSubject<IBookingNotification[]>([]);
}