import { CreateRoomComponent } from './../components/create-room/create-room.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-voice-rooms-list',
  templateUrl: './voice-rooms-list.component.html',
  styleUrls: ['./voice-rooms-list.component.scss'],
})
export class VoiceRoomsListComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    console.log('open dialog !');
    const dialogRef = this.dialog.open(CreateRoomComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
