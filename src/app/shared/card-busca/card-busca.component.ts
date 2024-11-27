import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Promocao } from '../../core/types/types';

@Component({
  selector: 'app-card-busca',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.scss',
})
export class CardBuscaComponent {
  @Input() promocao: Promocao;
}
