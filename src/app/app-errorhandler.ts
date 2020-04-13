/**
 * @author Sahana Chandra
 * Implement Error handler to handle both API and client error
 */

import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Injectable()

/**
 * customized Error handler. Redirect to error page or report services error 
 */
export class AppErrorHandler implements ErrorHandler {

    router: Router;
    constructor(private injector: Injector, private toaster: ToastrService) { }

    async handleError(error: any) {
        this.router=this.injector.get(Router);
        const document = this.injector.get(DOCUMENT);
        console.log(error);

        if (error instanceof HttpErrorResponse || error['rejection'] && error['rejection'] instanceof HttpErrorResponse) {

            const httpError: HttpErrorResponse = error['rejection'] ? error['rejection'] : error;
            const busyLoader: HTMLElement = document.getElementsByClassName('loader').item(0) as HTMLElement;
            busyLoader.style.display = 'none';

            if (!navigator.onLine) {
                this.router.navigate(['/error']);
            } else {
                //Handle http error 
                this.handleHttpError(httpError, error);
            }
        } else {
            //A client-side or network error occurred.	 
           this.router.navigate(['/error']);
        }


    }

    public async handleHttpError(htttpError, error) {
        if (htttpError.status) {
            //Based on the error ststus code navigate or notify the error message 
            if (htttpError.status == 420) {
                this.toaster.error("Something went wrong.");
            }
        } else {
            this.router.navigate(['/error']);
        }
    }
} 