import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Observable, take, tap } from 'rxjs';
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
    this.zones$ = this.gamingCentersService.getZonesByGamingCenterId(1)
      .pipe(
        tap(zones => {
          this.selectedZone = zones[0];
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
