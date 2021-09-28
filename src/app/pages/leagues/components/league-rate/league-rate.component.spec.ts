import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueRateComponent } from './league-rate.component';

describe('LeagueRateComponent', () => {
  let component: LeagueRateComponent;
  let fixture: ComponentFixture<LeagueRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
