import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OpcoesDeParada } from '../../../core/types/types';
import { FormControl } from '@angular/forms';
import { FormService } from '../../../core/services/form.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-paradas',
  standalone: true,
  imports: [MatCheckboxModule, CommonModule],
  templateUrl: './paradas.component.html',
  styleUrl: './paradas.component.scss',
})
export class ParadasComponent implements OnInit, OnDestroy {
  private formService = inject(FormService);

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

  opcaoSelecionada: OpcoesDeParada | null;
  conexoesControl: FormControl<number | null>;
  private readonly unsub$ = new Subject<void>();

  ngOnInit(): void {
    this.conexoesControl = this.formService.getControl<number>('conexoes');

    this.conexoesControl.valueChanges
      .pipe(takeUntil(this.unsub$))
      .subscribe((val) => {
        if (!val) {
          this.opcaoSelecionada = null;
        }
      });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

  connectionSelected(option: OpcoesDeParada): boolean {
    return this.opcaoSelecionada === option;
  }

  includeConnection(option: OpcoesDeParada) {
    if (!this.opcaoSelecionada) {
      return false;
    } else {
      return this.opcaoSelecionada?.value > option.value;
    }
  }

  alternateConnection(option: OpcoesDeParada, checked: boolean) {
    if (checked) {
      this.opcaoSelecionada = option;
      this.formService.formBusca.patchValue({ conexoes: Number(option.value) });
      return;
    }

    this.opcaoSelecionada = null;
    this.formService.formBusca.patchValue({ conexoes: null });
  }
}
