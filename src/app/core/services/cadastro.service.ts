import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private httpClient = inject(HttpClient);
  private readonly API_URL = environment.apiUrl;

  cadastrar(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.API_URL}/auth/cadastro`, user);
  }
}
