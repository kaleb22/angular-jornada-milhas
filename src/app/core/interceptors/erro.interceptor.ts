import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { MensagemService } from '../services/mensagem.service';

export const erroInterceptor: HttpInterceptorFn = (req, next) => {
  const msgService = inject(MensagemService);
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
        errorMsg = 'Internal server error';
      }

      msgService.openSnackBar(errorMsg);
      return throwError(() => new Error('Ops, ocorreu um erro'));
    }),
  );
};
