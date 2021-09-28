import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueContentComponent } from './league-content.component';

describe('LeagueContentComponent', () => {
  let component: LeagueContentComponent;
  let fixture: ComponentFixture<LeagueContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
