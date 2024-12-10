import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-passagem-resumo',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './passagem-resumo.component.html',
  styleUrl: './passagem-resumo.component.scss',
})
export class PassagemResumoComponent {
  @Input() title: string;
  @Input() value: number;
  @Input() tripTime: number;
  @Input() isRecommended: boolean;
}
