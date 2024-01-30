import { Injectable } from '@angular/core';
import { IDevice } from '../../models/entities/interfaces/IDevice';
import { Device } from '../../models/enums/device.enum';
import { DeviceMode } from '../../models/enums/deviceMode.enum';
import { Observable, of } from 'rxjs';
import { Zones } from './gaming-centers.service';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor() { }

  getAllDevices() {
    throw new Error("Not Implemented")
  }

  getDevicesByZoneId(zoneId: number): IDevice[] {
    return Zones.find((zone) => zone.id === zoneId)!.devices;
  }


}


