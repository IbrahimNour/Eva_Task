import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileAvatarComponent } from './profile-avatar/profile-avatar.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { MyPredictionsComponent } from './profile-details/my-predictions/my-predictions.component';
import { MyTeamsComponent } from './profile-details/my-teams/my-teams.component';
import { ProfileVerficationComponent } from './profile-verfication/profile-verfication.component';
import { ProfileLeadersboardComponent } from './profile-leadersboard/profile-leadersboard.component';
import { LoyalityModelComponent } from './components/loyality-model/loyality-model.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileAvatarComponent,
    ProfileDetailsComponent,
    MyPredictionsComponent,
    MyTeamsComponent,
    ProfileVerficationComponent,
    ProfileLeadersboardComponent,
    LoyalityModelComponent,
    QuizQuestionsComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
