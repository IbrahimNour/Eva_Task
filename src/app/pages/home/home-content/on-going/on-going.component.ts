import { Match } from './../../../../core/model/home.model';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-on-going',
  templateUrl: './on-going.component.html',
  styleUrls: ['./on-going.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnGoingComponent implements OnInit {
  @Input() onGoingMatches!: Match[];
  constructor() {}

  ngOnInit(): void {}
}
