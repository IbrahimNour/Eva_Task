import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountSettingsRoutingModule } from './account-settings-routing.module';
import { AccountSettingsComponent } from './account-settings.component';
import { AccountSettingNavbarComponent } from './components/account-setting-navbar/account-setting-navbar.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { FavouriteTeamsComponent } from './favourite-teams/favourite-teams.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { OthersComponent } from './components/others/others.component';
import { RequestLeagueComponent } from './request-league/request-league.component';

@NgModule({
  declarations: [
    AccountSettingsComponent,
    AccountSettingNavbarComponent,
    ProfileSettingComponent,
    FavouriteTeamsComponent,
    ChangePasswordComponent,
    FavouriteComponent,
    OthersComponent,
    RequestLeagueComponent,
  ],
  imports: [CommonModule, AccountSettingsRoutingModule, SharedModule],
})
export class AccountSettingsModule {}
