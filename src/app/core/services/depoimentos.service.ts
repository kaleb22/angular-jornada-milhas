import { Depoimento } from './../types/types';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepoimentosService {
  private httpClient = inject(HttpClient);
  private readonly API_PATH = environment.apiUrl;

  depoimentos$ = this.httpClient.get<Depoimento[]>(
    `${this.API_PATH}/depoimentos`,
  );
}
