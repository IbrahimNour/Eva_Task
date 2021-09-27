import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AdvertisingComponent } from './layout/advertising/advertising.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, AdvertisingComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
