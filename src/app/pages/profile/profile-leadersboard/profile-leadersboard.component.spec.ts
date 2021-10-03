import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLeadersboardComponent } from './profile-leadersboard.component';

describe('ProfileLeadersboardComponent', () => {
  let component: ProfileLeadersboardComponent;
  let fixture: ComponentFixture<ProfileLeadersboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLeadersboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLeadersboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
