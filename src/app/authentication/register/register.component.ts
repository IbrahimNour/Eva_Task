import { ActivatedRoute, Router } from '@angular/router';
import { BaseForm } from './../../base/base-form';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends BaseForm implements OnInit {
  switchForms!: boolean;
  formValue: {
    type: string;
  } = {
    type: 'general',
  };
  hide!: boolean;

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
      type: ['general'],
      phone: [null],
    });
  }

  onSubmitBasicForm(): void {
    this.switchForms = !this.switchForms;
  }

  handelTeamSubmitted(): void {
    this.router.navigate(['../verfication'], { relativeTo: this.route });
  }

  handelLogin(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
