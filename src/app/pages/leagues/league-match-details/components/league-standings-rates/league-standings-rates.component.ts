import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-standings-rates',
  templateUrl: './league-standings-rates.component.html',
  styleUrls: ['./league-standings-rates.component.scss'],
})
export class LeagueStandingsRatesComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onHandelRating(rateType: string): void {
    console.log(rateType);
    this.router.navigate(['./rating/' + rateType], {
      relativeTo: this.route,
    });
  }
}
