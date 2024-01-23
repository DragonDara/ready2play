import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellCardComponent } from './cell-card.component';

describe('CellCardComponent', () => {
  let component: CellCardComponent;
  let fixture: ComponentFixture<CellCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CellCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
