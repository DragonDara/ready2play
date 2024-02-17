import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Observable, combineLatest, tap } from 'rxjs';
import { Zone } from '../../../models/entities/classes/Zone';
import { DeviceSharingService } from '../../services/data-sharing/device-sharing.service';
import { GamingCentersService } from '../../services/gaming-centers.service';
import { ZoneName } from '../../../models/entities/classes/ZoneName';
import { ZonesSharingService } from '../../services/data-sharing/zones-sharing.service';

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
    private zoneSharingService: ZonesSharingService,
  ) {
  }

  ngOnInit(): void {
    this.zonesWithDevices$ = this.zoneSharingService.getZones()
      .pipe(
        tap((zones: Zone[]) => {
          this.gamingCentersService.zoneNames = zones.map(z => new ZoneName(z.id, z.name, 1))
          this.deviceSharingService.setDevices(zones[0].devices)
          this.selectedZone = zones[0]
        }),
      )
  }

  getSelectedOption() {
    this.deviceSharingService.setDevices(this.selectedZone.devices)
  }

  ngOnDestroy(): void {
  }
}
