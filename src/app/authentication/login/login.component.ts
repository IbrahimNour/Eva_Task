import { Router } from '@angular/router';
import { Login, LoginResponse } from './../../core/model/auth.model';
import { ApiService } from './../../core/services/api.service';
import { BaseForm } from './../../base/base-form';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseForm implements OnInit {
  hide!: boolean;
  constructor(
    protected readonly location: Location,
    private readonly fb: FormBuilder,
    private readonly apiService: ApiService,
    private readonly router: Router
  ) {
    super(location);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      Email: [null, (Validators.required, Validators.email)],
      Password: [null, Validators.required],
    });
  }

  onSubmitted(): void {
    this.apiService
      .post<Login, LoginResponse>('user/login', this.form.value)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigate(['pages']);
  }
}
