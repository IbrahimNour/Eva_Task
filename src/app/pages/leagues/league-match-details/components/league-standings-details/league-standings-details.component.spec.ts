import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStandingsDetailsComponent } from './league-standings-details.component';

describe('LeagueStandingsDetailsComponent', () => {
  let component: LeagueStandingsDetailsComponent;
  let fixture: ComponentFixture<LeagueStandingsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStandingsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStandingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
