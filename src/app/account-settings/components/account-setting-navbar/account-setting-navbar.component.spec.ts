import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingNavbarComponent } from './account-setting-navbar.component';

describe('AccountSettingNavbarComponent', () => {
  let component: AccountSettingNavbarComponent;
  let fixture: ComponentFixture<AccountSettingNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
