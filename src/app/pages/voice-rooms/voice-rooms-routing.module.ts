import { JoinRoomComponent } from './join-room/join-room.component';
import { EventFormComponent } from './event-form/event-form.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { VoiceRoomsListComponent } from './voice-rooms-list/voice-rooms-list.component';
import { VoiceRoomsComponent } from './voice-rooms.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VoiceRoomsComponent,
    children: [
      { path: '', component: VoiceRoomsListComponent },
      { path: 'upcoming-events', component: UpcomingEventsComponent },
      { path: 'event', component: EventFormComponent },
      { path: 'join-room', component: JoinRoomComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoiceRoomsRoutingModule {}
