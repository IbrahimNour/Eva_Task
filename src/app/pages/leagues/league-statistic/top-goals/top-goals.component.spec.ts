import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGoalsComponent } from './top-goals.component';

describe('TopGoalsComponent', () => {
  let component: TopGoalsComponent;
  let fixture: ComponentFixture<TopGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopGoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
