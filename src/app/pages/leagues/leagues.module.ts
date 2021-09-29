import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaguesRoutingModule } from './leagues-routing.module';
import { LeaguesComponent } from './leagues.component';
import { LeagueContentComponent } from './league-content/league-content.component';

import { LeagueCardComponent } from './league-content/league-card/league-card.component';

@NgModule({
  declarations: [LeaguesComponent, LeagueContentComponent, LeagueCardComponent],
  imports: [CommonModule, LeaguesRoutingModule, SharedModule],
})
export class LeaguesModule {}
