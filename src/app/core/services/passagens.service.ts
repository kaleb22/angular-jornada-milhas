import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Subject, switchMap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { DadosBusca, ResultadoBusca } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class PassagensService {
  private httpClient = inject(HttpClient);
  private readonly API_PATH = environment.apiUrl;
  private searchSubject = new Subject<DadosBusca>();
  private searchSubjectAction$ = this.searchSubject.asObservable();

  search(searchData: DadosBusca): void {
    this.searchSubject.next(searchData);
  }

  retornoBusca$ = this.searchSubjectAction$.pipe(
    switchMap((params) =>
      this.httpClient.get<ResultadoBusca>(
        `${this.API_PATH}/passagem/search?` + this.generateParams(params),
      ),
    ),
  );

  private generateParams(searchData: DadosBusca) {
    const query = Object.entries(searchData)
      .map(([key, val]) => {
        if (val) {
          return `${key}=${val}`;
        }
        return '';
      })
      .join('&');
    return query;
  }
}
