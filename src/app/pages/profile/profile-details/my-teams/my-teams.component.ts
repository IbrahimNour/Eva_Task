import { LoyalityModelComponent } from './../../components/loyality-model/loyality-model.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.scss'],
})
export class MyTeamsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openTeamModel(): void {
    console.log('open team model !');
    this.dialog.open(LoyalityModelComponent, {
      data: {
        animal: 'panda',
      },
      width: '400px',
    });
  }
}
