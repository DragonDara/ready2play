import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveHeaderComponent } from './active-header.component';

describe('ActiveHeaderComponent', () => {
  let component: ActiveHeaderComponent;
  let fixture: ComponentFixture<ActiveHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
