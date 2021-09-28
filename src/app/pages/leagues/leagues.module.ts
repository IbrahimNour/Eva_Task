import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaguesRoutingModule } from './leagues-routing.module';
import { LeaguesComponent } from './leagues.component';
import { LeagueContentComponent } from './league-content/league-content.component';
import { LeagueDetailsComponent } from './components/league-details/league-details.component';
import { LeaguePredictionsComponent } from './components/league-predictions/league-predictions.component';
import { LeagueRateComponent } from './components/league-rate/league-rate.component';
import { LeagueCardComponent } from './league-content/league-card/league-card.component';

@NgModule({
  declarations: [
    LeaguesComponent,
    LeagueContentComponent,
    LeagueDetailsComponent,
    LeaguePredictionsComponent,
    LeagueRateComponent,
    LeagueCardComponent,
  ],
  imports: [CommonModule, LeaguesRoutingModule, SharedModule],
})
export class LeaguesModule {}
