import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamInfoRoutingModule } from './team-info-routing.module';
import { TeamInfoComponent } from './team-info.component';

@NgModule({
  declarations: [TeamInfoComponent],
  imports: [CommonModule, TeamInfoRoutingModule, SharedModule],
})
export class TeamInfoModule {}
