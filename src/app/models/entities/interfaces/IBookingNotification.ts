export interface IBookingNotification {
    id: number
    userName: string;
    zone: string;
    deviceNumber: number;
    timeFrom: Date;
    timeTo: Date;
    tariff: string;
}