import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, tap, throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  count = 0;
  constructor(
    private toastrService: ToastrService,
    private spinerService: NgxSpinnerService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.count == 0) {
      this.spinerService.show();
    }
    console.log(request, 'requestrequestrequest');
    this.count++;
    return next.handle(request).pipe(tap((event: any) => {
      if (event instanceof HttpResponse) {
        console.log(event, 'eventtttt');

      }
    }),
      catchError((error: HttpErrorResponse) => {
        if (typeof error == 'string') {
          this.toastrService.error(error);
          return throwError(error);
        }
        if (typeof error == 'object') {
          this.toastrService.error(error.message);
          return throwError(error);
        }
        return throwError(error);
      }), finalize(() => {
        this.count--;
        if (this.count == 0) {
          this.spinerService.hide();
        }
      }));
  }
}
