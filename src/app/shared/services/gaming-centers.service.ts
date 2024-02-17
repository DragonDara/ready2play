import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docSnapshots, getDocs, query, where } from '@angular/fire/firestore';
import { Observable, first, map, switchMap } from 'rxjs';
import { Zone } from '../../models/entities/classes/Zone';
import { ZoneName } from '../../models/entities/classes/ZoneName';
import { IDevice } from '../../models/entities/interfaces/IDevice';
import { Device } from '../../models/entities/classes/Device';
import { DevicesService } from './devices.service';

@Injectable(
  {
    providedIn: 'root',
    deps: [Firestore]
  }
)
export class GamingCentersService {

  private _zoneNames: ZoneName[] = [];

  get zoneNames(): ZoneName[] {
    return this._zoneNames;
  }
  set zoneNames(zoneNames: ZoneName[]) {
    this._zoneNames = zoneNames;
  }

  constructor(
    private firestore: Firestore,
    private deviceService: DevicesService,
  ) {}

  getZoneByZoneId(zoneId: string) {
    return doc(this.firestore, "zones", zoneId);
  }

  private getZoneByZoneId$(zone: Zone) {
    return docSnapshots(
      doc(this.firestore, "zones", zone.id.toString())
    )
    .pipe(
      map(z => {
        zone.name = z.get('name')
        return zone
      })
    )
  }

  async getZonesIdsByGamingCenterId(gamingCenterId: number) : Promise<string[]> {
    const zones: string[] = []
    const zonesPerGamingCenterRef = collection(this.firestore, "zonesPerGamingCenter");
    const q = query(zonesPerGamingCenterRef, where("gamingCenterId", "==", gamingCenterId.toString()));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const zoneId = doc.get('zoneId')
      zones.push(zoneId)
    });

    return zones;
  }

  getZoneWithDevicesByZoneId(zoneId: string): Observable<Zone>{
    const devicesByZoneId = collection(this.firestore, 'zonesPerGamingCenter', zoneId, 'devices');
    const result = collectionData(devicesByZoneId)
      .pipe(
        map(d1 => {
          const zone = new Zone()
          const devices = d1.map(d => {
            const zone = new Zone()
            const z: IDevice = {
              number: d["number"],
              row: d["row"],
              col: d["col"],
              type: d["type"],
              mode: d["mode"],
              ipAddress: d["ipAddress"],
              macAddress: d["macAddress"]
            }
            return z
          })
          zone.id = +zoneId;
          zone.devices = devices
          zone.gamingCenterId = 1
          this.deviceService.devicesByZone.set(zone.id, devices);
          return zone
        }),
        switchMap(zone => this.getZoneByZoneId$(zone)),
        first()
      )
    return result
  }

  getZoneNameByIdFromMemory(zoneId: number): string {
    return this._zoneNames.find(z => z.id === zoneId)!.name
  }
  getZoneByZoneIdFromMemory(zoneId: number): ZoneName {
    return this._zoneNames.find(z => z.id === zoneId)!;
  }


}







