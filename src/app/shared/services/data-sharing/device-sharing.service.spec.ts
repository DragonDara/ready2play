/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeviceSharingService } from './device-sharing.service';

describe('Service: DeviceSharing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceSharingService]
    });
  });

  it('should ...', inject([DeviceSharingService], (service: DeviceSharingService) => {
    expect(service).toBeTruthy();
  }));
});
