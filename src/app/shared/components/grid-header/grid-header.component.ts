import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Observable, combineLatest, concatAll, forkJoin, from, map, mergeMap, of, single, switchMap, take, tap, toArray } from 'rxjs';
import { Zone } from '../../../models/entities/classes/Zone';
import { DeviceSharingService } from '../../services/data-sharing/device-sharing.service';
import { GamingCentersService } from '../../services/gaming-centers.service';

@Component({
  selector: 'app-grid-header',
  templateUrl: './grid-header.component.html',
  styleUrl: './grid-header.component.scss',
  providers: [
    {
      provide: GamingCentersService,
      useClass: GamingCentersService,
      deps: [Firestore]
    }
  ]
})
export class GridHeaderComponent {
  public zones$!: Observable<Zone[]>;

  public selectedZone!: Zone;
  constructor(
    private gamingCentersService: GamingCentersService,
    private deviceSharingService: DeviceSharingService,
  ) {
  }

  ngOnInit(): void {
    const zones: Zone[] = []
    this.gamingCentersService.getZonesIdsByGamingCenterId(1)
      .pipe(
        switchMap(zones => {
          return zones.map(zone => {
            const devices$ = this.gamingCentersService.getDevicesByZoneId(zone.id)
            const zones$ = this.gamingCentersService.getZoneByZoneRef(zone.zoneRef)
            return [devices$, zones$]
          })
        }),
        mergeMap(obsArray => combineLatest(obsArray)),
        map(x => {
          return new Zone()
        })
      )
      .subscribe(
        {
          next: res => {
            console.log(res)
          }
        }
      )
      // .pipe(
      //   tap(zones => {
      //     this.selectedZone = zones[0];
      //     this.deviceSharingService.setDevices(this.selectedZone.devices)
      //   })
      // )

  }

  getSelectedOption() {
    this.deviceSharingService.setDevices(this.selectedZone.devices)
  }

  ngOnDestroy(): void {
  }
}
