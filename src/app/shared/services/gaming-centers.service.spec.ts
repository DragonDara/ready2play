/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GamingCentersService } from './gaming-centers.service';

describe('Service: GamingCenters', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamingCentersService]
    });
  });

  it('should ...', inject([GamingCentersService], (service: GamingCentersService) => {
    expect(service).toBeTruthy();
  }));
});
