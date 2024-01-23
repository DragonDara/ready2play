import { Component } from '@angular/core';
import { ZoneService } from '../../services/zone.service';
import { Zone } from '../../../models/entities/classes/Zone';
import { Subscription } from 'rxjs';
import { DeviceSharingService } from '../../services/data-sharing/device-sharing.service';

@Component({
  selector: 'app-grid-header',
  templateUrl: './grid-header.component.html',
  styleUrl: './grid-header.component.scss'
})
export class GridHeaderComponent {
  public zones!: Zone[];
  private subscription!: Subscription;

  public selectedZone!: Zone


  constructor(
    private zoneService: ZoneService,
    private deviceSharingService: DeviceSharingService,
    ) {
  }

  ngOnInit(): void {
    this.subscription = this.zoneService.getZonesByGamingCenterId(1)
      .subscribe({
        next: res => {
          this.zones = res;
          this.selectedZone = this.zones[0];
          this.deviceSharingService.setDevices(this.selectedZone.devices)
        },
        error: err => console.error(err)
      })

  }

  getSelectedOption() {
    this.deviceSharingService.setDevices(this.selectedZone.devices)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
