import { LeagueContentComponent } from './league-content/league-content.component';
import { LeaguesComponent } from './leagues.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LeaguesComponent,
    children: [
      { path: '', component: LeagueContentComponent },
      {
        path: 'standings',
        loadChildren: () =>
          import('./league-standings/league-standings.module').then(
            (m) => m.LeagueStandingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaguesRoutingModule {}
