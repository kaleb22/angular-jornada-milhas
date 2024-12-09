import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { Companhia } from '../../../core/types/types';

@Component({
  selector: 'app-companhias',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './companhias.component.html',
  styleUrl: './companhias.component.scss',
})
export class CompanhiasComponent {
  @Input() companhias: Companhia[];
}
