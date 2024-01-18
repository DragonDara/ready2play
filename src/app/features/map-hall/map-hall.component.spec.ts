import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHallComponent } from './map-hall.component';

describe('MapHallComponent', () => {
  let component: MapHallComponent;
  let fixture: ComponentFixture<MapHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapHallComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MapHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
