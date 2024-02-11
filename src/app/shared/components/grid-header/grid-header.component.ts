import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Observable, combineLatest, tap } from 'rxjs';
import { Zone } from '../../../models/entities/classes/Zone';
import { DeviceSharingService } from '../../services/data-sharing/device-sharing.service';
import { GamingCentersService } from '../../services/gaming-centers.service';
import { ZoneName } from '../../../models/entities/classes/ZoneName';

@Component({
  selector: 'app-grid-header',
  templateUrl: './grid-header.component.html',
  styleUrl: './grid-header.component.scss',
})
export class GridHeaderComponent {
  public zonesWithDevices$!: Observable<Zone[]>

  public selectedZone!: Zone;
  constructor(
    private gamingCentersService: GamingCentersService,
    private deviceSharingService: DeviceSharingService,
  ) {
  }

  async ngOnInit(): Promise<void> {
    const zoneIds = await this.gamingCentersService.getZonesIdsByGamingCenterId(1);
    const zonesWithDevices$: Observable<Zone>[] = []
    zoneIds.forEach(id => {
      zonesWithDevices$.push(this.gamingCentersService.getZoneWithDevicesByZoneId(id))
    })
    this.zonesWithDevices$ = combineLatest(zonesWithDevices$)
      .pipe(
        tap(zones => {
          this.gamingCentersService.zoneNames = zones.map(z => new ZoneName(z.id, z.name, 1))
          this.selectedZone = zones[0]
          this.deviceSharingService.setDevices(this.selectedZone.devices)
        })
      )
  }

  getSelectedOption() {
    this.deviceSharingService.setDevices(this.selectedZone.devices)
  }

  ngOnDestroy(): void {
  }
}
