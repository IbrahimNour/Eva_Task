import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileVerficationComponent } from './profile-verfication.component';

describe('ProfileVerficationComponent', () => {
  let component: ProfileVerficationComponent;
  let fixture: ComponentFixture<ProfileVerficationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileVerficationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileVerficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
