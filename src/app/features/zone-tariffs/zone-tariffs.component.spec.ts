import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneTariffsComponent } from './zone-tariffs.component';

describe('ZoneTariffsComponent', () => {
  let component: ZoneTariffsComponent;
  let fixture: ComponentFixture<ZoneTariffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZoneTariffsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZoneTariffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
