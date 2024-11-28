import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpClient = inject(HttpClient);
  private readonly API_PATH = environment.apiUrl;

  auth(email: string, senha: string): Observable<any> {
    return this.httpClient.post(`${this.API_PATH}/auth/login`, {
      email,
      senha,
    });
  }
}
