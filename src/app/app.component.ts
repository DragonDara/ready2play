import { Component } from '@angular/core';
import { TariffsService } from './shared/services/tariffs.service';
import { Observable, combineLatest, tap } from 'rxjs';
import { Zone } from './models/entities/classes/Zone';
import { ZoneName } from './models/entities/classes/ZoneName';
import { DevicesService } from './shared/services/devices.service';
import { GamingCentersService } from './shared/services/gaming-centers.service';
import { DeviceSharingService } from './shared/services/data-sharing/device-sharing.service';
import { ZonesSharingService } from './shared/services/data-sharing/zones-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'reverse-place-admin-panel-web';

  constructor(
    private tariffsService: TariffsService,
  ){

  }

  ngOnInit(): void {

    this.tariffsService.getTariffsByGamingCenterId(1).subscribe({
      next: _ => _,
      error: err => console.error(err)
    })
  }
}
