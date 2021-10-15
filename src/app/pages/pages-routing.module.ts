import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./countries/countries.module').then((m) => m.CountriesModule),
      },
      {
        path: 'cities',
        loadChildren: () =>
          import('./cities/cities.module').then((m) => m.CitiesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
