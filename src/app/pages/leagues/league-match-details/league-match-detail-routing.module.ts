import { LeagueRateRecordComponent } from './league-rate-record/league-rate-record.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueMatchDetailComponent } from './league-match-detail.component';
import { LeagueStandingsHomeComponent } from './league-standings-home/league-standings-home.component';

const routes: Routes = [
  {
    path: '',
    component: LeagueMatchDetailComponent,
    children: [
      {
        path: '',
        component: LeagueStandingsHomeComponent,
      },
      {
        path: 'rating/:ratingType',
        component: LeagueRateRecordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeagueStandingsRoutingModule {}
