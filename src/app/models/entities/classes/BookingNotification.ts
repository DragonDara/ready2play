import { BookingStatus } from "../../enums/bookingStatus.enum";
import { IBookingNotification } from "../interfaces/IBookingNotification";
import { IDevice } from "../interfaces/IDevice";
import { IZoneNameable } from "../interfaces/IZoneNameable";

export class BookingNotification implements IBookingNotification {
  id: number;
  userName: string;
  status: BookingStatus;
  zone: IZoneNameable;
  device: IDevice;
  timeFrom: Date;
  timeTo: Date;
  tariff: string;

  constructor(id: number, userName: string, status: BookingStatus, zone: IZoneNameable, device: IDevice, timeFrom: Date, timeTo: Date, tariff: string) {
    this.id = id;
    this.userName = userName;
    this.status = status;
    this.zone = zone;
    this.device = device;
    this.timeFrom = timeFrom;
    this.timeTo = timeTo;
    this.tariff = tariff;
  }
}
