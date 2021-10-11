import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MatchStatus } from 'src/app/core/criatria/home/home.criatria';
import { Match } from 'src/app/core/model/home.model';
import { HomeService } from 'src/app/core/services/home/home.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
})
export class HomeContentComponent implements OnInit, OnDestroy {
  constructor(private readonly homeService: HomeService) {}

  homeCriatria = new BehaviorSubject<MatchStatus>(new MatchStatus(1));
  subscritpion!: Subscription;
  finishedMatches!: Match[];
  onGoingMatches!: Match[];
  upComing!: Match[];

  ngOnInit(): void {
    this.getMatchesToday();
  }

  getMatchesToday(): void {
    this.subscritpion = this.homeCriatria.subscribe((res) => {
      console.log('criatria', res);
      this.homeService.getMatches(res).subscribe((res) => {
        console.log(res);
      });
    });
  }

  ngOnDestroy(): void {
    this.subscritpion.unsubscribe();
  }
}
