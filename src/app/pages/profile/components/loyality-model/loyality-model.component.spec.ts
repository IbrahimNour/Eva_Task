import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyalityModelComponent } from './loyality-model.component';

describe('LoyalityModelComponent', () => {
  let component: LoyalityModelComponent;
  let fixture: ComponentFixture<LoyalityModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyalityModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyalityModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
