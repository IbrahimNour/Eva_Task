import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerInfoRoutingModule } from './player-info-routing.module';
import { PlayerInfoComponent } from './player-info.component';

@NgModule({
  declarations: [PlayerInfoComponent],
  imports: [CommonModule, PlayerInfoRoutingModule, SharedModule],
})
export class PlayerInfoModule {}
