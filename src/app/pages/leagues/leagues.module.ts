import { LeagueStatisticComponent } from './league-statistic/league-statistic.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaguesRoutingModule } from './leagues-routing.module';
import { LeaguesComponent } from './leagues.component';
import { LeagueContentComponent } from './league-content/league-content.component';

import { LeagueCardComponent } from './league-content/league-card/league-card.component';
import { TopCoachesComponent } from './league-statistic/top-coaches/top-coaches.component';
import { TopPlayesComponent } from './league-statistic/top-playes/top-playes.component';
import { TopGoalsComponent } from './league-statistic/top-goals/top-goals.component';
import { LeagueStandingsComponent } from './league-standings/league-standings.component';

@NgModule({
  declarations: [
    LeaguesComponent,
    LeagueContentComponent,
    LeagueCardComponent,
    LeagueStatisticComponent,
    TopPlayesComponent,
    TopCoachesComponent,
    TopGoalsComponent,
    LeagueStandingsComponent,
  ],
  imports: [CommonModule, LeaguesRoutingModule, SharedModule],
})
export class LeaguesModule {}
