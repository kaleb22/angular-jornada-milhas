import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Subject, switchMap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ResultadoBusca } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class PassagensService {
  private httpClient = inject(HttpClient);
  private readonly API_PATH = environment.apiUrl;
  private searchSubject = new Subject<any>();
  private searchSubjectAction$ = this.searchSubject.asObservable();

  search(searchData: any): void {
    this.searchSubject.next(searchData);
  }

  tickets$ = this.searchSubjectAction$.pipe(
    switchMap((params) =>
      this.httpClient.get<ResultadoBusca>(
        `${this.API_PATH}/passagem/search`,
        this.generateParams(params),
      ),
    ),
  );

  private generateParams(searchData: any) {
    const params = new HttpParams()
      .append('pagina', searchData.pagina)
      .append('porPagina', searchData.porPagina)
      .append('somenteIda', searchData.somenteIda)
      .append('passageirosAdultos', searchData.passageirosAdultos)
      .append('tipo', searchData.tipo);
    return { params };
  }
}
