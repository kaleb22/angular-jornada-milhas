import { AfterViewInit, Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
  MatFormFieldAppearance,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { debounceTime, map, Observable, startWith, take } from 'rxjs';

import { EstadosService } from '../../core/services/estados.service';
import { Estado } from '../../core/types/types';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
})
export class AutocompleteComponent implements OnInit, AfterViewInit {
  @Input() icon: string;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() controlName: FormControl;
  @Input() appearance: MatFormFieldAppearance;

  private estadosService = inject(EstadosService);
  estados$ = this.estadosService.estados$;
  filteredOptions$: Observable<Estado[]>;
  estados: Estado[] = [];

  ngOnInit(): void {
    this.estadosService.estados$.pipe(take(1)).subscribe((res) => {
      this.estados = res;
    });
  }

  ngAfterViewInit(): void {
    this.filteredOptions$ = this.controlName.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      map((value) => this.filter(value || '')),
    );
  }

  private filter(value: string | Estado): Estado[] {
    const nomeEstado = typeof value === 'string' ? value : value.nome;
    const filterValue = nomeEstado.toLowerCase();

    return this.estados.filter((option) =>
      option.nome.toLowerCase().includes(filterValue),
    );
  }

  displayFn(estado: Estado) {
    return estado && estado.nome ? estado.nome : '';
  }
}
