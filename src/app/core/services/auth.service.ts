import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, tap } from 'rxjs';
import { Token } from '../types/types';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpClient = inject(HttpClient);
  private userService = inject(UserService);
  private readonly API_PATH = environment.apiUrl;

  auth(email: string, senha: string): Observable<HttpResponse<Token>> {
    return this.httpClient
      .post<Token>(
        `${this.API_PATH}/auth/login`,
        {
          email,
          senha,
        },
        { observe: 'response' },
      )
      .pipe(
        tap((res) => {
          const token = res.body?.access_token || '';
          this.userService.saveToken(token);
        }),
      );
  }
}
