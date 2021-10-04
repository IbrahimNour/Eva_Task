import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLeagueComponent } from './request-league.component';

describe('RequestLeagueComponent', () => {
  let component: RequestLeagueComponent;
  let fixture: ComponentFixture<RequestLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
