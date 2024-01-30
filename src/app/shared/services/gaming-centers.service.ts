import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Zone } from '../../models/entities/classes/Zone';
import { IZone } from '../../models/entities/interfaces/IZone';
import { ZoneEnum } from '../../models/enums/zone.enum';
import { ITariff } from '../../models/entities/interfaces/ITariff';
import { TariffEnum } from '../../models/enums/tariff.enum';
import { IGamingCenter } from '../../models/entities/interfaces/IGamingCenter';
import { Tariff } from '../../models/entities/classes/Tariff';
import { DevicesService } from './devices.service';
import { Devices } from '../components/grid/grid.component';

@Injectable({
  providedIn: 'root',
})
export class GamingCentersService {
  constructor(
  ) {}

  getZonesByGamingCenterId(gamingCenterId: number): Observable<Zone[]> {
    // Filter the zones by gaming center id
    const filteredZones = Zones.filter((zone) => zone.gamingCenterId === gamingCenterId);
    // Map the filtered zones to Zone class instances
    const mappedZones = filteredZones.map(
      (zone) => new Zone(zone.id, zone.name, zone.devices, zone.gamingCenterId),
    );
    // Return a mock observable with the mapped zones
    return of(mappedZones);
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


