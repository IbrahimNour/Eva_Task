import { BaseForm } from './../../../base/base-form';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent extends BaseForm implements OnInit {
  constructor(protected readonly location: Location) {
    super(location);
  }

  ngOnInit(): void {}

  handelOnCancel(): void {
    this.cancel();
  }
}
