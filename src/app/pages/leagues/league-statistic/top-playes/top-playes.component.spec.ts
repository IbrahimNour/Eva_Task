import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlayesComponent } from './top-playes.component';

describe('TopPlayesComponent', () => {
  let component: TopPlayesComponent;
  let fixture: ComponentFixture<TopPlayesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPlayesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPlayesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
