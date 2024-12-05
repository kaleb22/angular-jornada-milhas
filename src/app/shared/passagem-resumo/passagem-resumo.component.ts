import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-passagem-resumo',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './passagem-resumo.component.html',
  styleUrl: './passagem-resumo.component.scss',
})
export class PassagemResumoComponent {}
