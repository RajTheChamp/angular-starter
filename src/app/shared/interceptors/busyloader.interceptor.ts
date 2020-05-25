/**
 * @author Sahana Chandra
 * @description busy indicator interceptor
 */
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/** Inject With Credentials into the request */
@Injectable()
export class BusyIndictorInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        const loadingContainer: HTMLElement = document.getElementsByClassName('loader-container').item(0) as HTMLElement;
        loadingContainer.style.display = 'block';
        return next.handle(request).pipe(tap(
            (observer: any) => {
                if (observer.status >= 200) {
                    loadingContainer.style.display = 'none';
                }
            },
            (observer: any) => {
                loadingContainer.style.display = 'none';
            }
        ))
    }
}