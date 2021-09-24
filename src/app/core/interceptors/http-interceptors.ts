import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // request = request.clone({
    //   headers: request.headers.set('AcademyId', '1'),
    // });

    /* add multi part form if send file  */
    // if (!(request.body instanceof FormData)) {
    //   request = request.clone({
    //     headers: request.headers.set('Content-Type', 'application/json'),
    //   });
    // }

    //to skip assests ar / en .json
    // let url = request.url;

    // if (!url.startsWith('./assets')) {
    //   if (url !== 'File/Upload') {
    //     url = environment.BASE_URL + url;
    //   } else {
    //     url = environment.BASE_FILE_URL + url;
    //   }
    //   request = request.clone({
    //     url: url,
    //   });
    // }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      })
    );
  }
}