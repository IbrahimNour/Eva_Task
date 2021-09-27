import { BaseForm } from './../../base/base-form';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.scss'],
})
export class AccountInformationComponent extends BaseForm implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    protected readonly location: Location,
    private readonly fb: FormBuilder
  ) {
    super(location);
  }

  switchForms!: boolean;
  formValue: {
    type: string;
  } = {
    type: 'general',
  };

  ngOnInit(): void {
    this.form = this.fb.group({
      type: ['general'],
    });
  }

  handelTeamSubmitted(): void {
    this.router.navigate(['/'], { relativeTo: this.route });
  }

  onSubmitBasicForm(): void {
    this.switchForms = !this.switchForms;
  }
}
