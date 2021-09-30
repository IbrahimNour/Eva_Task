import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-content',
  templateUrl: './league-content.component.html',
  styleUrls: ['./league-content.component.scss'],
})
export class LeagueContentComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onViewStatistic(): void {
    this.router.navigate(['./statistic'], { relativeTo: this.route });
  }
}
