import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { Tariff } from '../../models/entities/classes/Tariff';
import { Zone } from '../../models/entities/classes/Zone';
import { IBookingNotification } from '../../models/entities/interfaces/IBookingNotification';
import { IDevice } from '../../models/entities/interfaces/IDevice';
import { BookingStatus } from '../../models/enums/bookingStatus.enum';
import { BookingService } from '../../shared/services/data-sharing/booking.service';
import { DevicesService } from '../../shared/services/devices.service';
import { GamingCentersService } from '../../shared/services/gaming-centers.service';
import { Device } from '../../models/entities/classes/Device';
import { DeviceEnum } from '../../models/enums/device.enum';
import { TariffsService } from '../../shared/services/tariffs.service';
import { ITariff } from '../../models/entities/interfaces/ITariff';
import { IZone } from '../../models/entities/interfaces/IZone';
import { IZoneNameable } from '../../models/entities/interfaces/IZoneNameable';

@Component({
  selector: 'app-manual-booking-form',
  templateUrl: './manual-booking-form.component.html',
  styleUrls: ['./manual-booking-form.component.scss'],
})
export class ManualBookingFormComponent implements OnInit {
  public deviceType: typeof DeviceEnum = DeviceEnum;
  public form: FormGroup;
  public zones$!: Observable<Zone[]>;
  public devices$!: Observable<Device[]>;

  private subscription!: Subscription;
  public selectedZone!: Zone;
  constructor(
    private gamingCentersService: GamingCentersService,
    private fb: FormBuilder,
    private deviceService: DevicesService,
    private bookingService: BookingService,
    public tariffsService: TariffsService,
  ) {
    this.form = this.fb.group({
      name: [''],
      peopleCount: [''],
      tariff: [''],
      zone: [''],
      phoneNumber: [''],
      login: [''],
      devices: [''],
      timeFrom: [''],
      timeTo: ['']
    })
  }

  async ngOnInit() {
    const zoneIds = await this.gamingCentersService.getZonesIdsByGamingCenterId(1);
    const zonesWithDevices$: Observable<Zone>[] = []
    zoneIds.forEach(id => {
      zonesWithDevices$.push(this.gamingCentersService.getZoneWithDevicesByZoneId(id))
    })
    this.zones$ = combineLatest(zonesWithDevices$)

    this.form.controls["zone"].valueChanges.subscribe({
      next: (zone: IZone) => {
        this.devices$ = this.deviceService.getDevicesByZoneId$(zone.id.toString())
      }
    })
  }

  onSubmit() {
    const zone = this.form.value["zone"] as IZone
    const zoneName: IZoneNameable = {
      id: zone.id,
      name: zone.name,
      gamingCenterId: zone.gamingCenterId
    }
    const booking: IBookingNotification = {
      id: 10,
      userName: this.form.value["name"],
      status: BookingStatus.Accepted,
      zone: zoneName,
      tariff: (this.form.value["tariff"] as ITariff).displayName,
      timeFrom: new Date(this.form.value["timeFrom"]), //2024-02-07 09:00
      timeTo: new Date(this.form.value["timeTo"]),
      device: this.form.value["devices"]

    }

    this.bookingService.addBooking(booking);
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }
}
