import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Device } from '../../../models/device.enum';
import { IDevice } from '../../../models/entities/interfaces/IDevice';

@Component({
  selector: 'app-device-icon',
  templateUrl: './device-icon.component.html',
  styleUrls: ['./device-icon.component.css'],
})
export class DeviceIconComponent implements OnInit {
  public deviceType: typeof Device = Device;
  @Input() device: IDevice = {
    type: Device.Default,
    number: 0,
  };

  constructor() {}

  ngOnInit() {}
}
