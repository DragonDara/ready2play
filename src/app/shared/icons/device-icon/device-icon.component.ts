import { Component, Input } from '@angular/core';
import { Device } from '../../../models/device.enum';
import { IDevice } from '../../../models/entities/interfaces/IDevice';

@Component({
  selector: 'app-device-icon',
  templateUrl: './device-icon.component.html',
  styleUrls: ['./device-icon.component.css'],
})
export class DeviceIconComponent {
  public deviceType: typeof Device = Device;
  @Input() device: IDevice = {
    type: Device.Default,
    number: 0,
  };

  constructor() {}
}
