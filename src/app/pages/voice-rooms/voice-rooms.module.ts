import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoiceRoomsRoutingModule } from './voice-rooms-routing.module';
import { VoiceRoomsComponent } from './voice-rooms.component';
import { LiveRoomComponent } from './live-room/live-room.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { RoomCardComponent } from './components/room-card/room-card.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { VoiceRoomsListComponent } from './voice-rooms-list/voice-rooms-list.component';

@NgModule({
  declarations: [
    VoiceRoomsComponent,
    LiveRoomComponent,
    UpcomingEventsComponent,
    RoomCardComponent,
    EventCardComponent,
    VoiceRoomsListComponent,
  ],
  imports: [CommonModule, VoiceRoomsRoutingModule, SharedModule],
})
export class VoiceRoomsModule {}
