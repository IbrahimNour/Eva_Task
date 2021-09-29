import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStandingsRatesComponent } from './league-standings-rates.component';

describe('LeagueStandingsRatesComponent', () => {
  let component: LeagueStandingsRatesComponent;
  let fixture: ComponentFixture<LeagueStandingsRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStandingsRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStandingsRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
