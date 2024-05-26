import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';
import { SpinnerService } from './services/spinner.service';
import { inject } from '@angular/core';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  
  const spinnerService = inject(SpinnerService);
  
  spinnerService.requestStarted();

  return next(req).pipe(
    tap(
      (event) => {
        console.log("spinnerInterceptor", spinnerService);
        if (event instanceof HttpResponse) {
          spinnerService.requestEnded();
        }
      },
      (error: HttpErrorResponse) => {
        spinnerService.resetSpinner();
      }
    ))
};
