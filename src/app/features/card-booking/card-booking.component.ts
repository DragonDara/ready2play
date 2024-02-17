import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookingService } from '../../shared/services/data-sharing/booking.service';
import { IBookingNotification } from '../../models/entities/interfaces/IBookingNotification';
import { DeviceMode } from '../../models/enums/deviceMode.enum';
import { BookingNotification } from '../../models/entities/classes/BookingNotification';
import { DevicesService } from '../../shared/services/devices.service';
import { GamingCentersService } from '../../shared/services/gaming-centers.service';

@Component({
  selector: 'app-card-booking',
  templateUrl: './card-booking.component.html',
  styleUrl: './card-booking.component.scss',
})
export class CardBookingComponent {
  @Input() booking?: IBookingNotification;
  constructor(
    private bookingService: BookingService,
    private deviceService: DevicesService,
    ) {}

  createBooking(booking?: IBookingNotification) {
    if (booking) {
      this.bookingService.addBooking(booking);
      this.deviceService.setStatusForDevice(booking.device, DeviceMode.Reserved, booking.zone.id.toString()).then(_ => _).catch(err => {
        console.error(err);
      });
    }
  }

  rejectBooking(booking?: IBookingNotification) {
    if(booking) {
      this.bookingService.rejectBooking(booking)
    }
  }
}
