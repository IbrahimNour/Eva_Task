import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { AccountService } from '../services/account.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private readonly toastr: ToastrService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let handled: boolean = false;

    return next.handle(request).pipe(
      retry(1),
      catchError((returnedError) => {
        let errorMessage = null;

        if (returnedError.error instanceof ErrorEvent) {
          errorMessage = `Error: ${returnedError.message}`;
        } else if (returnedError instanceof HttpErrorResponse) {
          console.log('ERROR 2', returnedError);
          handled = this.handleServerSideError(returnedError);
        }

        if (!handled) {
          if (errorMessage) {
            return throwError(errorMessage);
          } else {
            return throwError('Unexpected problem occurred !');
          }
        } else {
          return throwError(returnedError);
        }
      })
    );
  }

  private handleServerSideError(error: HttpErrorResponse): boolean {
    let handled: boolean = false;

    switch (error.status) {
      case 401:
        this.toastr.error('You not Authorithed !, Please login again !');
        //this.accountService.logOut();
        handled = true;
        break;

      case 403:
        this.toastr.error('Please login again !');
        //this.accountService.logOut();
        handled = true;
        break;

      case 422:
        this.toastr.error(error.error.detail);
        handled = true;
        break;

      case 400:
        this.toastr.error(error.error.detail);
        handled = true;
        break;

      case 500:
        this.toastr.error('SERVER ERROR, TRY AGAIN  !');
        handled = true;
        break;

      case 404:
        this.toastr.error('API , NOT FOUND !');
        handled = true;
        break;
    }

    return handled;
  }
}
