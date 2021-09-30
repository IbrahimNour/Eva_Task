import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueRateRecordComponent } from './league-rate-record.component';

describe('LeagueRateRecordComponent', () => {
  let component: LeagueRateRecordComponent;
  let fixture: ComponentFixture<LeagueRateRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueRateRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueRateRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
