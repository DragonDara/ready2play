import { Component, OnInit } from '@angular/core';
import { Zone } from '../../models/entities/classes/Zone';
import { Subscription, forkJoin } from 'rxjs';
import { GamingCentersService } from '../../shared/services/gaming-centers.service';
import { Tariff } from '../../models/entities/classes/Tariff';

@Component({
  selector: 'app-manual-booking-form',
  templateUrl: './manual-booking-form.component.html',
  styleUrls: ['./manual-booking-form.component.scss']
})
export class ManualBookingFormComponent implements OnInit {

  public zones!: Zone[];
  public tariffs!: Tariff[];

  private subscription!: Subscription;
  public selectedZone!: Zone

  constructor(
    private gamingCentersService: GamingCentersService,
  ) { }

  ngOnInit() {
    const getZones = this.gamingCentersService.getZonesByGamingCenterId(1);
    const getTariffs = this.gamingCentersService.getTariffsByGamingCenterId(1);
    this.subscription = forkJoin([getTariffs, getZones]).subscribe({
      next: (res) => {
        this.tariffs = res[0];
        this.zones = res[1];
      },
      error: (err) => console.error(err)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
