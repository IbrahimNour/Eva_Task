import { Match } from './../../../../core/model/home.model';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinishedComponent implements OnInit {
  @Input() finishMatches!: Match[];
  constructor() {}

  ngOnInit(): void {}
}
