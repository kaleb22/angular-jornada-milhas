import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Passagem } from '../../core/types/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-passagem-info',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './passagem-info.component.html',
  styleUrl: './passagem-info.component.scss',
})
export class PassagemInfoComponent {
  @Input() passagem: Passagem;
}
