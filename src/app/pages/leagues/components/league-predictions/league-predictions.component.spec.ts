import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguePredictionsComponent } from './league-predictions.component';

describe('LeaguePredictionsComponent', () => {
  let component: LeaguePredictionsComponent;
  let fixture: ComponentFixture<LeaguePredictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaguePredictionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguePredictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
