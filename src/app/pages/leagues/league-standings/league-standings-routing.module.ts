import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueStandingsComponent } from './league-standings.component';

const routes: Routes = [{ path: '', component: LeagueStandingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeagueStandingsRoutingModule {}
