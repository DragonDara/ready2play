import { Component, OnInit } from '@angular/core';
import { Device } from '../../../models/enums/device.enum';
import { IBookingNotification } from '../../../models/entities/interfaces/IBookingNotification';
import { IDevice } from '../../../models/entities/interfaces/IDevice';
import { BookingService } from '../../services/data-sharing/booking.service';
import { MatDialog } from '@angular/material/dialog';
import { DeviceBookingsComponent } from '../device-bookings/device-bookings.component';
import { DeviceMode } from '../../../models/enums/deviceMode.enum';
import { DeviceSharingService } from '../../services/data-sharing/device-sharing.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  public deviceType: typeof Device = Device;

  public devicesPc!: IDevice[];
  public devicesPs!: IDevice[];

  rows: number = 10; // Default rows
  cols: number = 10; // Default columns

  constructor(
    private bookingService: BookingService,
    private dialog: MatDialog,
    private deviceSharingService: DeviceSharingService,
  ) {}

  ngOnInit(): void {

    this.deviceSharingService.getDevices()
      .subscribe({
        next: res => {
          this.devicesPc = res.filter((x) => x.type === Device.PC);
          this.devicesPs = res.filter((x) => x.type === Device.PS);
        },
        error: err => console.error(err)
      })
  }

  // Generate an array based on the number of rows or columns
  generateRange(size: number): number[] {
    return Array(size)
      .fill(0)
      .map((x, i) => i);
  }

  public canDisplayDevice(row: number, col: number, type: Device): boolean {
    if (type === this.deviceType.PC) {
      return this.devicesPc.some(devicePc => devicePc.row === row && devicePc.col === col)
    }

    if (type === this.deviceType.PS) {
      return this.devicesPs.some(devicePs => devicePs.row === row && devicePs.col === col)
    }

    throw new Error(`Unknown type of device ${type.toString()}`)
  }

  public getDevice(row: number, col: number, type: Device): IDevice
   {
    let device: IDevice | undefined;
    if (type === this.deviceType.PC) {
      device = this.devicesPc.find(devicePc => devicePc.row === row && devicePc.col === col)
    }

    if (type === this.deviceType.PS) {
      device = this.devicesPs.find(devicePs => devicePs.row === row && devicePs.col === col)
    }
    if (device !== undefined) return device;

    throw new Error(`Failed to fetch a device with row=${row} and col=${col}`)
  }
}

export const Devices: IDevice[] = [
  {
    number: 1,
    type: Device.PC,
    mode: DeviceMode.Available,
    row: 1,
    col: 1,
    macAddress: '10:10:10:01',
    ipAddress: '192.168.1.1'
  },
  {
    number: 2,
    type: Device.PC,
    mode: DeviceMode.Available,
    row: 1,
    col: 2,
    macAddress: '10:10:10:01',
    ipAddress: '192.168.1.1'
  },
  {
    number: 3,
    type: Device.PC,
    mode: DeviceMode.Available,
    row: 2,
    col: 1,
    macAddress: '10:10:10:01',
    ipAddress: '192.168.1.1'
  },
  {
    number: 1,
    type: Device.PS,
    mode: DeviceMode.Available,
    row: 3,
    col: 1,
    macAddress: '10:10:10:01',
    ipAddress: '192.168.1.1'
  },
]; // Assume this is populated with actual device data
