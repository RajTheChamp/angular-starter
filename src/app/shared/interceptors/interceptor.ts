/**
 * @author Sahana Chandra
 * @description customize interceptor
 */
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

/** Inject With Credentials into the request */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                auth_client: 'authorised'
            }
        });

        return next.handle(request)
        //     .pipe(
        //         retry(1),
        //         catchError((error: HttpErrorResponse) => {
        //             return throwError('');
        //         })
        // );
    }
}