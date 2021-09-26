import { FeatureCardComponent } from './features/feature-card/feature-card.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { DescriptionComponent } from './description/description.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    DescriptionComponent,
    FeaturesComponent,
    FeatureCardComponent,
  ],
  imports: [CommonModule, LandingPageRoutingModule, SharedModule],
})
export class LandingPageModule {}
