import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Zone } from '../../models/entities/classes/Zone';
import { IZone } from '../../models/entities/interfaces/IZone';
import { ZoneEnum } from '../../models/enums/zone.enum';
import { Devices } from '../components/grid/grid.component';
import { ITariff } from '../../models/entities/interfaces/ITariff';
import { TariffEnum } from '../../models/enums/tariff.enum';
import { IGamingCenter } from '../../models/entities/interfaces/IGamingCenter';
import { Tariff } from '../../models/entities/classes/Tariff';

@Injectable({
  providedIn: 'root'
})
export class GamingCentersService {

constructor() { }

getZonesByGamingCenterId(gamingCenterId: number): Observable<Zone[]> {
  // Filter the zones by gaming center id
  let filteredZones = Zones.filter(zone => zone.gamingCenterId === gamingCenterId);
  // Map the filtered zones to Zone class instances
  let mappedZones = filteredZones.map(zone => new Zone(zone.id, zone.name, zone.devices, zone.gamingCenterId));
  // Return a mock observable with the mapped zones
  return of(mappedZones);
}

getTariffsByGamingCenterId(gamingCenterId: number): Observable<Tariff[]> {
  let filteredTariffs = GamingCenters.find(gc => gc.id === gamingCenterId)!.tariffs
  let mappedTariffs = filteredTariffs.map(t => new Tariff(t.id, t.name));
  return of(mappedTariffs);
}

}

export const Zones: IZone[] = [
  {
    id: 1,
    name: ZoneEnum.Bootcamp,
    devices: Devices.slice(0, 2), // assign first two device to bootcamp
    gamingCenterId: 1
  },
  {
    id: 2,
    name: ZoneEnum.Standard,
    devices: Devices.slice(-2), // assing last two elements to standard
    gamingCenterId: 1
  },

];

export const Tariffs: ITariff[] = [
  {
    id: 1,
    name: TariffEnum.one
  },
  {
    id: 2,
    name: TariffEnum.twoPlusOne
  },
  {
    id: 3,
    name: TariffEnum.threePlusTwo
  },
  {
    id: 4,
    name: TariffEnum.Night
  },
]

export const GamingCenters: IGamingCenter[] = [
  {
    id: 1,
    name: "Meta",
    personnel: undefined,
    zones: Zones,
    tariffs: Tariffs
  }
]
