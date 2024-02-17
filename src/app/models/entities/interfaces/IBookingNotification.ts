import { BookingStatus } from '../../enums/bookingStatus.enum';
import { ZoneName } from '../classes/ZoneName';
import { IDevice } from './IDevice';
import { IZoneNameable } from './IZoneNameable';

export interface IBookingNotification {
  id: number;
  userName: string;
  phoneNumber: string,
  status: BookingStatus
  zone: IZoneNameable;
  device: IDevice;
  timeFrom: Date;
  timeTo: Date;
  tariff: string;
}
