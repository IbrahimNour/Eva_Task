import { ActivatedRoute, Router } from '@angular/router';
import { BaseForm } from './../../base/base-form';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent extends BaseForm implements OnInit {
  hidePassword: boolean = true;
  hideconfirmPassword: boolean = true;
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
      newPassword: [null],
      confirmNewPassword: [null],
    });
  }

  onnHandelSubmitted(): void {
    this.router.navigate(['/'], { relativeTo: this.route });
  }
}
