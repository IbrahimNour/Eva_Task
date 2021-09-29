import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-standings-predictions',
  templateUrl: './league-standings-predictions.component.html',
  styleUrls: ['./league-standings-predictions.component.scss'],
})
export class LeagueStandingsPredictionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  changeFirst(e: any): void {
    console.log(e);
  }
  changeSecond(e: any): void {
    console.log(e);
  }
}
