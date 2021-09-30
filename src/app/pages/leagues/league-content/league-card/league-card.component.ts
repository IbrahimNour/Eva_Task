import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-card',
  templateUrl: './league-card.component.html',
  styleUrls: ['./league-card.component.scss'],
})
export class LeagueCardComponent implements OnInit {
  panelOpenState!: boolean;
  constructor(private router: Router, private readonly route: ActivatedRoute) {}

  ngOnInit(): void {}

  handelStandingsLoad(): void {
    this.router.navigate(['./standings'], { relativeTo: this.route });
  }

  handelDetailMatch(): void {
    this.router.navigate(['./match-detail'], { relativeTo: this.route });
  }
}
