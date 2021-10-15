import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CitiesComponent } from './cities.component';
import { CityFormComponent } from './city-form/city-form.component';

@NgModule({
  declarations: [CitiesListComponent, CitiesComponent, CityFormComponent],
  imports: [CommonModule, CitiesRoutingModule, SharedModule],
})
export class CitiesModule {}
