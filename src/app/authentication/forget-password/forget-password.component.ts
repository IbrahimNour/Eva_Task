import { ActivatedRoute, Router } from '@angular/router';
import { BaseForm } from './../../base/base-form';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent extends BaseForm implements OnInit {
  constructor(
    protected readonly location: Location,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    super(location);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      phone: [null],
    });
  }

  handelTeamSubmitted(): void {
    this.router.navigate(['../reset-password'], { relativeTo: this.route });
  }
}
