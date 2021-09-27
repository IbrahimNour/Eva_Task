import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../landing-page/landing-page.module').then(
            (m) => m.LandingPageModule
          ),
      },
      {
        path: 'contactUs',
        loadChildren: () =>
          import('./contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
