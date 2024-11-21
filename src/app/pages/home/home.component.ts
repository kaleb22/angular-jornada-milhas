import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { CardBuscaComponent } from '../../shared/card-busca/card-busca.component';
import { CardDepoimentoComponent } from '../../shared/card-depoimento/card-depoimento.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    ContainerComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
