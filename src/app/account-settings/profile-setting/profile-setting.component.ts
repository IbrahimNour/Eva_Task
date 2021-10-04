import { FormBuilder } from '@angular/forms';
import { BaseForm } from './../../base/base-form';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss'],
})
export class ProfileSettingComponent extends BaseForm implements OnInit {
  constructor(
    protected readonly location: Location,
    private readonly fb: FormBuilder
  ) {
    super(location);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      phone: [null],
    });
  }
}
