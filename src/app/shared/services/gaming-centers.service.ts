import { Injectable } from '@angular/core';
import { collectionData, docData } from '@angular/fire/firestore';
import { Firestore, collection } from 'firebase/firestore';
import { Observable, concatMap, map, mergeMap, of, take, toArray } from 'rxjs';
import { Tariff } from '../../models/entities/classes/Tariff';
import { Zone } from '../../models/entities/classes/Zone';
import { IGamingCenter } from '../../models/entities/interfaces/IGamingCenter';
import { ITariff } from '../../models/entities/interfaces/ITariff';
import { IZone } from '../../models/entities/interfaces/IZone';
import { TariffEnum } from '../../models/enums/tariff.enum';
import { ZoneEnum } from '../../models/enums/zone.enum';
import { Devices } from '../components/grid/grid.component';

@Injectable()
export class GamingCentersService {
  constructor(
    private firestore: Firestore,
  ) {}

  getZonesByGamingCenterId(gamingCenterId: number): Observable<Zone[]> {
    const zonesPerGamingCenter = collection(this.firestore, 'zonesPerGamingCenter');
    return collectionData(zonesPerGamingCenter)
    .pipe(
      concatMap(zonesPerGamingCenter => zonesPerGamingCenter.map(z => z["zone"])),
      mergeMap(zonesDocReference => docData(zonesDocReference, {idField: 'id'})),
      map(x =>  new Zone(x!["id"], x!["name"], Devices.slice(0,2), 1)),
      take(2),
      toArray(),
    )
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


