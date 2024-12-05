import { AfterViewInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';

import { BannerComponent } from '../../shared/banner/banner.component';
import { PassagensService } from './../../core/services/passagens.service';
import { ContainerComponent } from '../../shared/container/container.component';
import { FormComponent } from '../../shared/form/form.component';
import { PassagemResumoComponent } from '../../shared/passagem-resumo/passagem-resumo.component';
import { PassagemInfoComponent } from '../../shared/passagem-info/passagem-info.component';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [
    BannerComponent,
    ContainerComponent,
    FormComponent,
    CommonModule,
    PassagemResumoComponent,
    PassagemInfoComponent,
  ],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss',
})
export class BuscaComponent implements AfterViewInit {
  private passagensService = inject(PassagensService);

  tickets$ = this.passagensService.tickets$.pipe(
    tap((res) => console.log(res)),
  );

  ngAfterViewInit(): void {
    this.passagensService.search({
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva',
    });
  }
}
