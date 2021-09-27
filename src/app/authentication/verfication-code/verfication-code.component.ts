import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verfication-code',
  templateUrl: './verfication-code.component.html',
  styleUrls: ['./verfication-code.component.scss'],
})
export class VerficationCodeComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  // this called every time when user changed the code
  onCodeChanged(code: string) {
    console.log(code);
  }

  // this called only if user entered full code
  onCodeCompleted(code: string) {
    console.log(code);
  }

  onHandelSubmitted(): void {
    this.router.navigate(['../account-information'], {
      relativeTo: this.route,
    });
  }
}
