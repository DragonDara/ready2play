// device-sharing.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDevice } from '../../../models/entities/interfaces/IDevice';

@Injectable({
  providedIn: 'root'
})
export class DeviceSharingService {

  // Create a BehaviorSubject with an initial value of an empty array
  private devices$ = new BehaviorSubject<IDevice[]>([]);

  constructor() { }

  // Set the devices value
  setDevices(devices: IDevice[]) {
    this.devices$.next(devices);
  }

  // Get the devices value as an observable
  getDevices() {
    return this.devices$.asObservable();
  }
}
