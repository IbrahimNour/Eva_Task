import { HomeContentComponent } from './home-content/home-content.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeContentComponent,
      },
      // {
      //   path: 'leagues',
      //   loadChildren: () =>
      //     import('../leagues/leagues.module').then((m) => m.LeaguesModule),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
