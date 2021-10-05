import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamInfoRoutingModule } from './team-info-routing.module';
import { TeamInfoComponent } from './team-info.component';


@NgModule({
  declarations: [
    TeamInfoComponent
  ],
  imports: [
    CommonModule,
    TeamInfoRoutingModule
  ]
})
export class TeamInfoModule { }
