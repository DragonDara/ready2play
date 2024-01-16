import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceIconComponent } from '../../common-components/icons/device-icon/device-icon.component';
import { Device } from '../../models/device.enum';
import { IBookingNotification } from '../../models/entities/interfaces/IBookingNotification';
import { IDevice } from '../../models/entities/interfaces/IDevice';
import { BookingService } from '../../services/data-sharing/booking.service';
import { MatDialog } from '@angular/material/dialog';
import { BookingNotificationComponent } from '../booking-notification/booking-notification.component';
import { DeviceBookingsComponent } from '../device-bookings/device-bookings.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  public deviceType: typeof Device = Device;

  public devicesPc: IDevice[] | any;
  public devicesPs: IDevice[] | any;

  private devices: IDevice[] = [
    {
      number: 1,
      type: Device.PC,
    },
    {
      number: 1,
      type: Device.PS,
    },
  ]; // Assume this is populated with actual device data

  selectedDeviceBookings: IBookingNotification[] = [];

  rows: number = 10; // Default rows
  cols: number = 10; // Default columns

  constructor(
    private bookingService: BookingService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.devicesPc = this.devices.filter((x) => x.type === Device.PC);
    this.devicesPs = this.devices.filter((x) => x.type === Device.PS);
  }

  // Generate an array based on the number of rows or columns
  generateRange(size: number): number[] {
    return Array(size)
      .fill(0)
      .map((x, i) => i);
  }

  selectDevice(device: IDevice) {
    this.selectedDeviceBookings = this.bookingService.getBookingsForDeviceTypeAndNumber(
      device.type,
      device.number,
    );

    const dialogRef = this.dialog.open(DeviceBookingsComponent, {
      minWidth: '400px',
      maxWidth: '400px',
      data: {
        deviceNumber: device.number,
        selectedDeviceBookings: this.selectedDeviceBookings,
      }, // Pass the selected device bookings as data
    });
  }
}
