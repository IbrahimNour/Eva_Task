import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueStandingsRoutingModule } from './league-standings-routing.module';
import { LeagueStandingsComponent } from './league-standings.component';
import { LeagueStandingsDetailsComponent } from './league-standings-details/league-standings-details.component';
import { LeagueStandingsRatesComponent } from './league-standings-rates/league-standings-rates.component';
import { LeagueStandingsPredictionsComponent } from './league-standings-predictions/league-standings-predictions.component';

@NgModule({
  declarations: [
    LeagueStandingsComponent,
    LeagueStandingsDetailsComponent,
    LeagueStandingsRatesComponent,
    LeagueStandingsPredictionsComponent,
  ],
  imports: [CommonModule, LeagueStandingsRoutingModule, SharedModule],
})
export class LeagueStandingsModule {}
