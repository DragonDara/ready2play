import { Injectable } from '@angular/core';
import { Zone } from '../../../models/entities/classes/Zone';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZonesSharingService {

  private zones$ = new Subject<Zone[]>();

  constructor() { }

  setZones(zones: Zone[]) {
    this.zones$.next(zones);
  }

  getZones() {
    return this.zones$.asObservable();
  }
}
