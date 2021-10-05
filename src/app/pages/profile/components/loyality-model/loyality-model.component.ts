import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-loyality-model',
  templateUrl: './loyality-model.component.html',
  styleUrls: ['./loyality-model.component.scss'],
})
export class LoyalityModelComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  onHandelTest(): void {
    this.router.navigate(['pages/profile/quiz-questions'], {
      relativeTo: this.route,
    });
  }
}
