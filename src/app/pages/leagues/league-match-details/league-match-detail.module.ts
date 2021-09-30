import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueStandingsRoutingModule } from './league-match-detail-routing.module';
import { LeagueStandingsRatesComponent } from './components/league-standings-rates/league-standings-rates.component';
import { LeagueStandingsPredictionsComponent } from './components/league-standings-predictions/league-standings-predictions.component';
import { LeagueRateRecordComponent } from './league-rate-record/league-rate-record.component';
import { LeagueStandingsDetailsComponent } from './components/league-standings-details/league-standings-details.component';
import { LeagueStandingsHomeComponent } from './league-standings-home/league-standings-home.component';
import { LeagueMatchDetailComponent } from './league-match-detail.component';

@NgModule({
  declarations: [
    LeagueMatchDetailComponent,
    LeagueStandingsDetailsComponent,
    LeagueStandingsRatesComponent,
    LeagueStandingsPredictionsComponent,
    LeagueRateRecordComponent,
    LeagueStandingsHomeComponent,
  ],
  imports: [CommonModule, LeagueStandingsRoutingModule, SharedModule],
})
export class LeagueMatchDetailModule {}
