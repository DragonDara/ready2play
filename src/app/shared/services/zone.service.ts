import { Injectable } from '@angular/core';
import { IZone } from '../../models/entities/interfaces/IZone';
import { Observable, of } from 'rxjs';
import { ZoneEnum } from '../../models/enums/zone.enum';
import { Devices } from '../components/grid/grid.component';
import { Zone } from '../../models/entities/classes/Zone';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {


  constructor() { }

  // Get zones by gaming center id
  getZonesByGamingCenterId(gamingCenterId: number): Observable<Zone[]> {
    // Filter the zones by gaming center id
    let filteredZones = Zones.filter(zone => zone.gamingCenterId === gamingCenterId);
    // Map the filtered zones to Zone class instances
    let mappedZones = filteredZones.map(zone => new Zone(zone.id, zone.name, zone.devices, zone.gamingCenterId));
    // Return a mock observable with the mapped zones
    return of(mappedZones);
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



