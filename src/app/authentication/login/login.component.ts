import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide!: boolean;
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onHandelRegister(): void {
    this.router.navigate(['./register'], { relativeTo: this.route });
  }

  handelForgetPassword(): void {
    this.router.navigate(['./forget-password'], { relativeTo: this.route });
  }
}
