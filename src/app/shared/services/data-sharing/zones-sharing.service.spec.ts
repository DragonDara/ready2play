/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ZonesSharingService } from './zones-sharing.service';

describe('Service: ZonesSharing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZonesSharingService]
    });
  });

  it('should ...', inject([ZonesSharingService], (service: ZonesSharingService) => {
    expect(service).toBeTruthy();
  }));
});
