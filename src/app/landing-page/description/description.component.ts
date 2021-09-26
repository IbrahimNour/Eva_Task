import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  handelAuth(): void {
    console.log('Auth !');
    this.router.navigate(['auth']);
  }
}
