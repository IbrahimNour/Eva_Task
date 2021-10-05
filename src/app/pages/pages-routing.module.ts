import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'leagues',
        loadChildren: () =>
          import('./leagues/leagues.module').then((m) => m.LeaguesModule),
      },
      {
        path: 'contactUs',
        loadChildren: () =>
          import('./contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'playerInfo',
        loadChildren: () =>
          import('./player-info/player-info.module').then(
            (m) => m.PlayerInfoModule
          ),
      },
      {
        path: 'teamInfo',
        loadChildren: () =>
          import('./team-info/team-info.module').then((m) => m.TeamInfoModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
