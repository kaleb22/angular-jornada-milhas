import { AfterViewInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';

import { BannerComponent } from '../../shared/banner/banner.component';
import { PassagensService } from './../../core/services/passagens.service';
import { ContainerComponent } from '../../shared/container/container.component';
import { FormComponent } from '../../shared/form/form.component';
import { PassagemInfoComponent } from '../../shared/passagem-info/passagem-info.component';
import { FormService } from '../../core/services/form.service';
import { PassagemFiltrosComponent } from '../../shared/passagem-filtros/passagem-filtros.component';
import { PassagemResumoComponent } from '../../shared/passagem-resumo/passagem-resumo.component';
import { Passagem, ResultadoBusca } from '../../core/types/types';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [
    BannerComponent,
    ContainerComponent,
    FormComponent,
    CommonModule,
    PassagemInfoComponent,
    PassagemFiltrosComponent,
    PassagemResumoComponent,
  ],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss',
})
export class BuscaComponent implements AfterViewInit {
  private passagensService = inject(PassagensService);
  private formService = inject(FormService);

  ticketCheapest: Passagem;
  ticketFatest: Passagem;
  ticketRecommended: Passagem;
  recommend: boolean = false;

  retornoBusca$ = this.passagensService.retornoBusca$.pipe(
    tap((response) => {
      if (this.checkRecommendation(response)) {
        this.populateCheapestTicket(response);
        this.populateFatestTicket(response);
        this.populateRecommendedTicket(response);
      }
    }),
  );

  private checkRecommendation(response: ResultadoBusca): boolean {
    if (response.resultado.length >= 3) {
      this.recommend = true;
      return true;
    }
    this.recommend = false;
    return false;
  }

  private populateCheapestTicket(response: ResultadoBusca): void {
    this.ticketCheapest = response.resultado.reduce((prev, curr) => {
      if (prev.total < curr.total) {
        return prev;
      }
      return curr;
    });
  }

  private populateFatestTicket(response: ResultadoBusca): void {
    this.ticketFatest = response.resultado.reduce((prev, curr) => {
      if (prev.tempoVoo < curr.tempoVoo) {
        return prev;
      }
      return curr;
    });
  }

  private populateRecommendedTicket(response: ResultadoBusca): void {
    this.ticketRecommended = response.resultado.sort((a, b) => {
      let first =
        (a.tempoVoo / this.ticketCheapest.tempoVoo +
          a.total / this.ticketCheapest.total) /
        2;
      let second =
        (b.tempoVoo / this.ticketCheapest.total +
          b.total / this.ticketCheapest.total) /
        2;
      return first - second;
    })[0];
  }

  ngAfterViewInit(): void {
    this.searchTickets();
  }

  searchTickets() {
    const searchData = this.formService.getSearchData();
    this.passagensService.search(searchData);
  }
}
