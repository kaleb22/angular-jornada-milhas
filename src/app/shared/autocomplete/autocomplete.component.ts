import { AfterViewInit, Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { debounceTime, map, Observable, startWith, take } from 'rxjs';

import { EstadosService } from '../../core/services/estados.service';

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
  @Input() label: string;
  @Input() controlName: FormControl;

  private estadosService = inject(EstadosService);
  estados$ = this.estadosService.estados$;
  filteredOptions$: Observable<string[]>;
  estados: string[];

  ngOnInit(): void {
    this.estadosService.estados$.pipe(take(1)).subscribe((res) => {
      this.estados = res.map((estado) => estado.nome);
    });
  }

  ngAfterViewInit(): void {
    this.filteredOptions$ = this.controlName.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      map((value) => this.filter(value || '')),
    );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.estados.filter((option) =>
      option.toLowerCase().includes(filterValue),
    );
  }
}
