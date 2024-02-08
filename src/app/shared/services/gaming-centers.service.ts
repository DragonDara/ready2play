import { Injectable } from '@angular/core';
import { collectionData, docData, docSnapshots } from '@angular/fire/firestore';
import { DocumentReference, Firestore, collection, collectionGroup, doc, getDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { Observable, concatMap, first, from, map, mergeMap, of, single, switchMap, take, tap, toArray } from 'rxjs';
import { Tariff } from '../../models/entities/classes/Tariff';
import { Zone } from '../../models/entities/classes/Zone';
import { IGamingCenter } from '../../models/entities/interfaces/IGamingCenter';
import { ITariff } from '../../models/entities/interfaces/ITariff';
import { IZone } from '../../models/entities/interfaces/IZone';
import { TariffEnum } from '../../models/enums/tariff.enum';
import { ZoneEnum } from '../../models/enums/zone.enum';
import { Devices } from '../components/grid/grid.component';
import { IDevice } from '../../models/entities/interfaces/IDevice';

@Injectable()
export class GamingCentersService {
  constructor(
    private firestore: Firestore,
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
          return zone
        }),
        switchMap(zone => this.getZoneByZoneId$(zone)),
        first()
      )
    return result
  }

}







