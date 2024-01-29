import { BookingStatus } from '../../enums/bookingStatus.enum';
import { IDevice } from './IDevice';

export interface IBookingNotification {
  id: number;
  userName: string;
  status: BookingStatus
  zone: string;
  device: IDevice;
  timeFrom: Date;
  timeTo: Date;
  tariff: string;
}
