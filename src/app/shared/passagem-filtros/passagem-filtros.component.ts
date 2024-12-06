import { CardComponent } from './../card/card.component';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ParadasComponent } from './paradas/paradas.component';
import { CompanhiasComponent } from './companhias/companhias.component';
import { PrecosComponent } from './precos/precos.component';

@Component({
  selector: 'app-passagem-filtros',
  standalone: true,
  imports: [
    MatIconModule,
    CardComponent,
    MatButtonModule,
    ParadasComponent,
    CompanhiasComponent,
    PrecosComponent,
  ],
  templateUrl: './passagem-filtros.component.html',
  styleUrl: './passagem-filtros.component.scss',
})
export class PassagemFiltrosComponent {}
