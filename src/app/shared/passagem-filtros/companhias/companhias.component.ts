import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { Companhia } from '../../../core/types/types';
import { FormControl } from '@angular/forms';
import { FormService } from '../../../core/services/form.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-companhias',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './companhias.component.html',
  styleUrl: './companhias.component.scss',
})
export class CompanhiasComponent implements OnInit, OnDestroy {
  private fomrService = inject(FormService);

  @Input() companhias: Companhia[];
  companhiaControl: FormControl<number | null>;
  companhiasSelecionadas: Companhia[] = [];
  private readonly unsub$ = new Subject<void>();

  ngOnInit(): void {
    this.companhiaControl = this.fomrService.getControl<number[]>('companhias');

    this.companhiaControl.valueChanges
      .pipe(takeUntil(this.unsub$))
      .subscribe((val) => {
        if (!val) {
          this.companhiasSelecionadas = [];
        }
      });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

  selectCompany(company: Companhia): boolean {
    return this.companhiasSelecionadas.includes(company);
  }

  changeCompany(company: Companhia, checked: boolean): void {
    if (checked) {
      this.companhiasSelecionadas.push(company);
    } else {
      this.companhiasSelecionadas = this.companhiasSelecionadas.filter(
        (comp) => comp != company,
      );
    }

    this.fomrService.formBusca.patchValue({
      companhias: this.companhiasSelecionadas.map((comp) => comp.id),
    });
  }
}
