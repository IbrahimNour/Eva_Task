import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStandingsHomeComponent } from './league-standings-home.component';

describe('LeagueStandingsHomeComponent', () => {
  let component: LeagueStandingsHomeComponent;
  let fixture: ComponentFixture<LeagueStandingsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStandingsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStandingsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
