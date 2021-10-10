import { VoiceRoomsListComponent } from './voice-rooms-list/voice-rooms-list.component';
import { VoiceRoomsComponent } from './voice-rooms.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VoiceRoomsComponent,
    children: [{ path: '', component: VoiceRoomsListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoiceRoomsRoutingModule {}
