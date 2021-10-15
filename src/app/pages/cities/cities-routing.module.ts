import { CityFormComponent } from './city-form/city-form.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { CitiesComponent } from './cities.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CitiesComponent,
    children: [
      { path: '', component: CitiesListComponent },
      { path: 'cityForm', component: CityFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitiesRoutingModule {}
