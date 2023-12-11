import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Device } from '../../../models/device.enum';

@Component({
  selector: 'app-device-icon',
  templateUrl: './device-icon.component.html',
  styleUrls: ['./device-icon.component.css']
})
export class DeviceIconComponent implements OnInit {

  public deviceType: typeof Device = Device;
  @Input() device: [number, Device] = [0, Device.Default]

  constructor() { }

  ngOnInit() {
  }

}
