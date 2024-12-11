import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const erroInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((e: HttpErrorResponse) => {
      let errorMsg = 'Unkown error';

      if (e.error instanceof ErrorEvent) {
        // client side
        errorMsg = `client side error: ${e.error.message}`;
      } else if (e.status === 404) {
        errorMsg = 'Resource not found';
      } else if (e.status === 401) {
        errorMsg = 'unauthorized access';
      } else if (e.status === 500) {
        errorMsg = 'Server internal error';
      }

      console.error(e);
      console.error(errorMsg);
      return throwError(() => new Error('Ops, ocorreu um erro'));
    }),
  );
};
