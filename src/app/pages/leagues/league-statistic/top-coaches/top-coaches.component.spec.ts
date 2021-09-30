import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCoachesComponent } from './top-coaches.component';

describe('TopCoachesComponent', () => {
  let component: TopCoachesComponent;
  let fixture: ComponentFixture<TopCoachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCoachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCoachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
