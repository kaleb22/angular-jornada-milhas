import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private httpClient = inject(HttpClient);
  private readonly API_URL = environment.apiUrl;

  signUp(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.API_URL}/auth/cadastro`, user);
  }

  getProfile(token: string): Observable<User> {
    const headers = this.generateHeaders(token);
    return this.httpClient.get<User>(`${this.API_URL}/auth/perfil`, {
      headers,
    });
  }

  updateProfile(user: User, token: string) {
    const headers = this.generateHeaders(token);
    return this.httpClient.patch<User>(`${this.API_URL}/auth/perfil`, user, {
      headers,
    });
  }

  private generateHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
}
