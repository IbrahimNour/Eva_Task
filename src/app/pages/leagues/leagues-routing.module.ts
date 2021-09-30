import { LeagueContentComponent } from './league-content/league-content.component';
import { LeaguesComponent } from './leagues.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueStatisticComponent } from './league-statistic/league-statistic.component';
import { LeagueStandingsComponent } from './league-standings/league-standings.component';

const routes: Routes = [
  {
    path: '',
    component: LeaguesComponent,
    children: [
      { path: '', component: LeagueContentComponent },
      {
        path: 'match-detail',
        loadChildren: () =>
          import('./league-match-details/league-match-detail.module').then(
            (m) => m.LeagueMatchDetailModule
          ),
      },
      {
        path: 'standings',
        component: LeagueStandingsComponent,
      },
      {
        path: 'statistic',
        component: LeagueStatisticComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaguesRoutingModule {}
