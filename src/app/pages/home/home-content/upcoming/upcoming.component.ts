import { Match } from './../../../../core/model/home.model';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpcomingComponent implements OnInit {
  @Input() upComing!: Match[];

  constructor() {}

  ngOnInit(): void {}
}
