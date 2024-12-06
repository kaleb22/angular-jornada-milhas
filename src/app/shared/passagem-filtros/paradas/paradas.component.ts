import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-paradas',
  standalone: true,
  imports: [MatCheckboxModule, CommonModule],
  templateUrl: './paradas.component.html',
  styleUrl: './paradas.component.scss',
})
export class ParadasComponent {
  opcoes = [
    {
      display: 'Direto',
      value: '0',
    },
    {
      display: '1 conexão',
      value: '1',
    },
    {
      display: '2 conexões',
      value: '2',
    },
    {
      display: 'Mais de 2 conexões',
      value: '3',
    },
  ];
}
