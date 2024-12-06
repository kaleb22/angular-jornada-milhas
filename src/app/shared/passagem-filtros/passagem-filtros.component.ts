import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CardComponent } from './../card/card.component';
import { ParadasComponent } from './paradas/paradas.component';
import { CompanhiasComponent } from './companhias/companhias.component';
import { PrecosComponent } from './precos/precos.component';
import { FormService } from '../../core/services/form.service';

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
export class PassagemFiltrosComponent {
  private formService = inject(FormService);

  @Output() searchEvent = new EventEmitter();

  search() {
    if (this.formService.isFormValid()) {
      this.formService.formBusca.markAllAsTouched();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      return;
    }
    this.searchEvent.emit();
  }
}