import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './../services/user/user.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    public readonly accountService: UserService,
    public readonly router: Router
  ) {}
  canActivate(): boolean {
    if (!this.accountService.isAuthenticated()) {
      this.router.navigate(['auth']);
      return false;
    }
    this.router.navigate(['pages']);
    return true;
  }
}
