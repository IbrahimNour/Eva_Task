import { BaseForm } from './../../base/base-form';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-request-league',
  templateUrl: './request-league.component.html',
  styleUrls: ['./request-league.component.scss'],
})
export class RequestLeagueComponent extends BaseForm implements OnInit {
  constructor(protected readonly location: Location) {
    super(location);
  }

  ngOnInit(): void {}

  handelSubmitted(): void {
    this.cancel();
  }
}
