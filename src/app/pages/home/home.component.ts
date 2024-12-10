import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from '../../shared/banner/banner.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { CardBuscaComponent } from '../../shared/card-busca/card-busca.component';
import { CardDepoimentoComponent } from '../../shared/card-depoimento/card-depoimento.component';
import { FormComponent } from '../../shared/form/form.component';
import { PromocaoService } from '../../core/services/promocao.service';
import { DepoimentosService } from '../../core/services/depoimentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    ContainerComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    FormComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private promocaoService = inject(PromocaoService);
  private depoimentoService = inject(DepoimentosService);
  private router = inject(Router);

  promocoes$ = this.promocaoService.promocoes$;
  depoimentos$ = this.depoimentoService.depoimentos$;

  goToSearchPage(): void {
    this.router.navigateByUrl('/busca');
  }
}
