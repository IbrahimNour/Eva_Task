import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryFormComponent } from './country-form/country-form.component';

@NgModule({
  declarations: [
    CountriesComponent,
    CountriesListComponent,
    CountryFormComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule, SharedModule],
})
export class CountriesModule {}
