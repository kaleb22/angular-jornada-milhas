import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { shareReplay } from 'rxjs';
import { Estado } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class EstadosService {
  private httpClient = inject(HttpClient);
  private readonly API_PATH = environment.apiUrl;

  estados$ = this.httpClient
    .get<Estado[]>(`${this.API_PATH}/estados`)
    .pipe(shareReplay(1));
}
