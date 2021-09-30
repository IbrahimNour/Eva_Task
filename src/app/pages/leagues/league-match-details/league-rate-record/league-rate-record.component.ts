import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-league-rate-record',
  templateUrl: './league-rate-record.component.html',
  styleUrls: ['./league-rate-record.component.scss'],
})
export class LeagueRateRecordComponent implements OnInit, OnDestroy {
  constructor(private readonly route: ActivatedRoute) {}

  headingType!: string;
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.route.params
      .pipe(
        map((params) => params.ratingType),
        tap((paramsData: string) => {
          console.log(paramsData);
        })
      )
      .subscribe((paramsData) => {
        console.log('handeltype => ', this.headingType);
        if (paramsData === 'player') {
          this.headingType = 'Give rate for each player';
        }
        if (paramsData === 'goal') {
          this.headingType = 'Give rate for each Goal';
        }
        if (paramsData === 'coach') {
          this.headingType = 'Give rate for the Coach';
        }

        if (paramsData === 'changes') {
          this.headingType = 'Give rate for each change';
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
