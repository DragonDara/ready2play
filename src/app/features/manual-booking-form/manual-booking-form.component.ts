import { Component, OnInit } from '@angular/core';
import { Zone } from '../../models/entities/classes/Zone';
import { Subscription, forkJoin } from 'rxjs';
import { GamingCentersService } from '../../shared/services/gaming-centers.service';
import { Tariff } from '../../models/entities/classes/Tariff';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IBookingNotification } from '../../models/entities/interfaces/IBookingNotification';
import { BookingStatus } from '../../models/enums/bookingStatus.enum';
import { DeviceSharingService } from '../../shared/services/data-sharing/device-sharing.service';
import { DevicesService } from '../../shared/services/devices.service';
import { IDevice } from '../../models/entities/interfaces/IDevice';
import { Device } from '../../models/enums/device.enum';
import { DeviceMode } from '../../models/enums/deviceMode.enum';
import { BookingService } from '../../shared/services/data-sharing/booking.service';

@Component({
  selector: 'app-manual-booking-form',
  templateUrl: './manual-booking-form.component.html',
  styleUrls: ['./manual-booking-form.component.scss'],
})
export class ManualBookingFormComponent implements OnInit {
  public deviceType: typeof Device = Device;
  public form: FormGroup;
  public zones!: Zone[];
  public tariffs!: Tariff[];
  public devices!: IDevice[];

  private subscription!: Subscription;
  public selectedZone!: Zone;
  constructor(
    private gamingCentersService: GamingCentersService,
    private fb: FormBuilder,
    private deviceService: DevicesService,
    private bookingService: BookingService
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

  ngOnInit() {
    // const getZones = this.gamingCentersService.getZonesByGamingCenterId(1);
    // const getTariffs = this.gamingCentersService.getTariffsByGamingCenterId(1);
    // this.subscription = forkJoin([getTariffs, getZones]).subscribe({
    //   next: (res) => {
    //     this.tariffs = res[0];
    //     this.zones = res[1];
    //   },
    //   error: (err) => console.error(err),
    // });

    // this.form.controls["zone"].valueChanges.subscribe({
    //   next: zoneId => {
    //     this.devices = this.deviceService.getDevicesByZoneId(zoneId)
    //   }
    // })
  }

  onSubmit() {
    const booking: IBookingNotification = {
      id: 10,
      userName: this.form.value["name"],
      status: BookingStatus.Accepted,
      zone: this.form.value["zone"],
      tariff: this.form.value["tariff"],
      timeFrom: new Date(this.form.value["timeFrom"]),
      timeTo: new Date(this.form.value["timeTo"]),
      device: this.form.value["devices"]

    }

    this.bookingService.addBooking(booking);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
