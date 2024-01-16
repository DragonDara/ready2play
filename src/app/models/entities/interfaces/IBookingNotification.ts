import { IDevice } from './IDevice';

export interface IBookingNotification {
  id: number;
  userName: string;
  zone: string;
  device: IDevice;
  timeFrom: Date;
  timeTo: Date;
  tariff: string;
}
