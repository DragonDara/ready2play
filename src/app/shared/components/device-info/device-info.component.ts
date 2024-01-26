import { Component, Inject, OnInit } from '@angular/core';
import { IDevice } from '../../../models/entities/interfaces/IDevice';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Device } from '../../../models/enums/device.enum';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.scss']
})
export class DeviceInfoComponent implements OnInit {

  public deviceType: typeof Device = Device;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public device: IDevice,
  ) { }

  ngOnInit() {
  }

}
