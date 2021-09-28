import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AdvertisingComponent } from './layout/advertising/advertising.component';

@NgModule({
  declarations: [PagesComponent, NavbarComponent, AdvertisingComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
})
export class PagesModule {}
