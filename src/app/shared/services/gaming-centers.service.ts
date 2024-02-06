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

  getTariffsByGamingCenterId(gamingCenterId: number): Observable<Tariff[]> {
    const filteredTariffs = GamingCenters.find((gc) => gc.id === gamingCenterId)!.tariffs;
    const mappedTariffs = filteredTariffs.map((t) => new Tariff(t.id, t.name, t.displayName));
    return of(mappedTariffs);
  }

}

export const Zones: IZone[] = [
  {
    id: 1,
    name: ZoneEnum.Bootcamp,
    devices: Devices.slice(0, 2), // assign first two device to bootcamp
    gamingCenterId: 1,
  },
  {
    id: 2,
    name: ZoneEnum.Standard,
    devices: Devices.slice(-2), // assing last two elements to standard
    gamingCenterId: 1,
  },
];

export const Tariffs: ITariff[] = [
  {
    id: 1,
    name: TariffEnum.one,
    displayName: '1 час'
  },
  {
    id: 2,
    name: TariffEnum.twoPlusOne,
    displayName: '2+1 час'
  },
  {
    id: 3,
    name: TariffEnum.threePlusTwo,
    displayName: '3+2 час'
  },
  {
    id: 4,
    name: TariffEnum.Night,
    displayName: 'Ночь'
  },
];

export const GamingCenters: IGamingCenter[] = [
  {
    id: 1,
    name: 'Meta',
    personnel: undefined,
    zones: Zones,
    tariffs: Tariffs,
  },
];


