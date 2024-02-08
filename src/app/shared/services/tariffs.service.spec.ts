/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TariffsService } from './tariffs.service';

describe('Service: Tariffs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TariffsService]
    });
  });

  it('should ...', inject([TariffsService], (service: TariffsService) => {
    expect(service).toBeTruthy();
  }));
});
