import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStandingsPredictionsComponent } from './league-standings-predictions.component';

describe('LeagueStandingsPredictionsComponent', () => {
  let component: LeagueStandingsPredictionsComponent;
  let fixture: ComponentFixture<LeagueStandingsPredictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStandingsPredictionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStandingsPredictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
