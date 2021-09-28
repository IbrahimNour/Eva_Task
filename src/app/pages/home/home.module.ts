import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AdvertisingComponent } from './layout/advertising/advertising.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { OnGoingComponent } from './home-content/on-going/on-going.component';
import { FinishedComponent } from './home-content/finished/finished.component';
import { UpcomingComponent } from './home-content/upcoming/upcoming.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, AdvertisingComponent, HomeContentComponent, OnGoingComponent, FinishedComponent, UpcomingComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
