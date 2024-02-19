import { Component, Input } from '@angular/core';
import { DeviceEnum } from '../../../models/enums/device.enum';
import { IDevice } from '../../../models/entities/interfaces/IDevice';
import { DeviceMode } from '../../../models/enums/deviceMode.enum';
import { DeviceBookingsComponent } from '../device-bookings/device-bookings.component';
import { MatDialog } from '@angular/material/dialog';
import { IBookingNotification } from '../../../models/entities/interfaces/IBookingNotification';
import { BookingService } from '../../services/data-sharing/booking.service';
import { DeviceInfoComponent } from '../device-info/device-info.component';
import { BookingStatus } from '../../../models/enums/bookingStatus.enum';

@Component({
  selector: 'app-device-icon',
  templateUrl: './device-icon.component.html',
  styleUrls: ['./device-icon.component.css'],
})
export class DeviceIconComponent {
  public deviceType: typeof DeviceEnum = DeviceEnum;
  @Input() device: IDevice = {
    type: DeviceEnum.Default,
    number: 0,
    mode: DeviceMode.Default,
    row: 0,
    col: 0,
    ipAddress: '',
    macAddress: ''
  };
  @Input() booking!: IBookingNotification;
  selectedDeviceBookings: IBookingNotification[] = [];
  private currentBooking: IBookingNotification = {} as IBookingNotification;
  constructor(
    private dialog: MatDialog,
    private bookingService: BookingService,
  ) {}

  ngOnInit(): void {
    this.bookingService.getBookings(1, BookingStatus.Accepted).subscribe(
      {
        next: acceptedBookings => {
          if(acceptedBookings){
            this.bookingService.acceptedBookings = acceptedBookings.sort((a, b) => a.timeFrom.getTime() - b.timeFrom.getTime());
            this.currentBooking = acceptedBookings.filter(booking => booking.device.number === this.device.number)[0];
          }

        },
        error: err => console.error(err)
      }
    )

  }

  public getBackgroundColorForIcons(deviceMode: DeviceMode): string {
    switch (deviceMode) {
      case DeviceMode.Reserved:
        return '#2F80ED'; // blue
      case DeviceMode.Available:
        return '#0D9488'; //green
      case DeviceMode.InMaintenance:
        return '#A5A5A5'; //grey, disabled
      default:
        throw new Error(`Unhandled device mode: ${deviceMode}`);
    }
  }

  public getIdStyleForDisplayField(deviceMode: DeviceMode): string {
    switch(deviceMode) {
      case DeviceMode.Available:
        return `display: flex;
                max-width: 64px;
                padding: 0px 4px;
                justify-content: center;
                align-items: center;
                border-radius: 100px;
                border: 1px solid var(--Status-Success, #0D9488);`;
      case DeviceMode.Reserved:
        return `border-radius: 100px;
                border: 1px solid var(--Blue-1, #2F80ED);
                display: inline-flex;
                max-width: 64px;
                padding: 0px 4px;
                justify-content: center;
                align-items: center`;
      case DeviceMode.InMaintenance:
        return `display: inline-flex;
                max-width: 64px;
                padding: 0px 2px;
                justify-content: center;
                align-items: center;
                gap: 10px;
                border-radius: 100px;
                background: var(--text-icons-disabled, #DFDFDF);`;
      default:
        throw new Error(`Unhandled device mode: ${deviceMode}`)
    }
  }

  public getDeviceDisplayName(deviceType: DeviceEnum, deviceMode: DeviceMode, deviceNumber: number): string {
    switch(deviceMode) {
      case DeviceMode.Available:
        return 'Свободный';
      case DeviceMode.InMaintenance:
        return 'В обслуживании';
      case DeviceMode.Reserved:
        return this.currentBooking.userName;
      default:
        throw new Error(`Unhandled device mode: ${deviceMode}`)
    }
  }

  onUsernameClicked(){
    this.selectedDeviceBookings = this.bookingService.getAcceptedBookings(
      this.device.type,
      this.device.number,
      BookingStatus.Accepted
    );

    const dialogRef = this.dialog.open(DeviceBookingsComponent, {
      minWidth: '400px',
      maxWidth: '400px',
      data: {
        deviceNumber: this.device.number,
        selectedDeviceBookings: this.selectedDeviceBookings,
      }, // Pass the selected device bookings as data
    });
  }

  onDeviceClicked(device: IDevice){
    const dialogRef = this.dialog.open(DeviceInfoComponent, {
      minWidth: '400px',
      maxWidth: '400px',
      data: device, // Pass the selected device bookings as data
    });
  }
}
