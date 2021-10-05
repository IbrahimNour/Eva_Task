import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
import { ProfileLeadersboardComponent } from './profile-leadersboard/profile-leadersboard.component';
import { ProfileVerficationComponent } from './profile-verfication/profile-verfication.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: '', component: ProfileDetailsComponent },
      { path: 'verfication', component: ProfileVerficationComponent },
      { path: 'leaderboard', component: ProfileLeadersboardComponent },
      { path: 'quiz-questions', component: QuizQuestionsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
