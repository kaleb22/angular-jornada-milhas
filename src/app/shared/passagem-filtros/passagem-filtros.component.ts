import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from './../card/card.component';
import { ParadasComponent } from './paradas/paradas.component';
import { CompanhiasComponent } from './companhias/companhias.component';
import { PrecosComponent } from './precos/precos.component';
import { FormService } from '../../core/services/form.service';
import { Companhia, ResultadoBusca } from '../../core/types/types';

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
    ReactiveFormsModule,
  ],
  templateUrl: './passagem-filtros.component.html',
  styleUrl: './passagem-filtros.component.scss',
})
export class PassagemFiltrosComponent implements OnInit {
  formService = inject(FormService);

  @Input() resultadoBusca: ResultadoBusca;
  @Output() searchEvent = new EventEmitter();

  companhias: Companhia[] = [];
  precoMin: number;
  precoMax: number;

  /*
   * In order to create a set of companies with no objects repeated
   * I had to use companhiaArray to convert every object to a string
   * Then, create a set of companhiaArray eliminating the duplicates
   * finally, convert back to an array of strings and add the objects
   * to companhias property
   */
  ngOnInit(): void {
    let companhiaArray: string[] = [];

    this.precoMax = this.resultadoBusca.precoMax;
    this.precoMin = this.resultadoBusca.precoMin;

    this.resultadoBusca.resultado.forEach((passagem) => {
      companhiaArray.push(JSON.stringify(passagem.companhia));
    });

    const companhiasSet = new Set(companhiaArray);
    companhiaArray = Array.from(companhiasSet);

    companhiaArray.forEach((companhia) =>
      this.companhias.push(JSON.parse(companhia)),
    );
  }

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

  clearFilters(): void {
    this.formService.formBusca.patchValue({
      conexoes: null,
      companhias: null,
      precoMax: this.precoMax,
      precoMin: this.precoMin,
    });
  }
}
