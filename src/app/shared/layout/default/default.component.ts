import { Component } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { Zone } from '../../../models/entities/classes/Zone';
import { ZonesSharingService } from '../../services/data-sharing/zones-sharing.service';
import { GamingCentersService } from '../../services/gaming-centers.service';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
  constructor(
    private gamingCentersService: GamingCentersService,
    private zonesSharingService: ZonesSharingService,
    private devicesService: DevicesService,
  ) {}

  async ngOnInit(): Promise<void> {
    const zoneIds = await this.gamingCentersService.getZonesIdsByGamingCenterId(1);
    const zones$: Observable<Zone>[] = []

    zoneIds.forEach(async id => {
      zones$.push(this.gamingCentersService.getZoneWithDevicesByZoneId(id))
    })


    combineLatest(zones$)
      .subscribe({
        next: zones => {
          this.zonesSharingService.setZones(zones)
        },
        error: err => {
          console.error(err)
        }
      })

  }
}
