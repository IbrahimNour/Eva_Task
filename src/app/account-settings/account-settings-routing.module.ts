import { RequestLeagueComponent } from './request-league/request-league.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './account-settings.component';
import { FavouriteTeamsComponent } from './favourite-teams/favourite-teams.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: AccountSettingsComponent,
    children: [
      {
        path: '',
        component: ProfileSettingComponent,
      },
      {
        path: 'favourite-team',
        component: FavouriteTeamsComponent,
      },
      {
        path: 'request-league',
        component: RequestLeagueComponent,
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountSettingsRoutingModule {}
