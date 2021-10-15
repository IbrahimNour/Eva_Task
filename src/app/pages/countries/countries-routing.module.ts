import { CountryFormComponent } from './country-form/country-form.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountriesComponent } from './countries.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CountriesComponent,
    children: [
      { path: '', component: CountriesListComponent },
      {
        path: 'country',
        component: CountryFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
