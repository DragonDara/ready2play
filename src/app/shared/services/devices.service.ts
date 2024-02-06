import { Injectable } from '@angular/core';
import { IDevice } from '../../models/entities/interfaces/IDevice';
import { DeviceMode } from '../../models/enums/deviceMode.enum';
import { Observable, map, of } from 'rxjs';
import { Zones } from './gaming-centers.service';
import { Firestore, collection } from 'firebase/firestore';
import { collectionData } from '@angular/fire/firestore';
import { Device } from '../../models/entities/classes/Device';

@Injectable()
export class DevicesService {

  constructor(
    private firestore: Firestore,
  ) {}

  getAllDevices() {
    throw new Error("Not Implemented")
  }

  getDevicesByZoneId(zoneId: string): Observable<IDevice[]> {
    return collectionData(
      collection(this.firestore, 'zonesPerGamingCenter', zoneId, 'devices')
    )
      .pipe(
        map(devices =>
          devices.map(d =>new Device(d["type"], d["number"], d["mode"], d["macAddress"], d["ipAddress"],d["row"], d["col"])))
      )
  }


}


