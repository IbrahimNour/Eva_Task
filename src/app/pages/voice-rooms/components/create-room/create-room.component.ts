import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss'],
})
export class CreateRoomComponent implements OnInit {
  choosePlayerCheck!: boolean;
  constructor() {}

  ngOnInit(): void {}

  onhandelChoosePlayer(): void {
    this.choosePlayerCheck = !this.choosePlayerCheck;
  }
}
