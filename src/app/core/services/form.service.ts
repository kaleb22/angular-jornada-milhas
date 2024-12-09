import { inject, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatChipSelectionChange } from '@angular/material/chips';

import { DadosBusca, FormBusca } from './../types/types';
import { ModalComponent } from '../../shared/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  formBusca: FormGroup<FormBusca>;
  readonly dialog = inject(MatDialog);

  constructor() {
    const idaEvolta = new FormControl(true, [Validators.required]);
    const dataVolta = new FormControl(null, [Validators.required]);

    this.formBusca = new FormGroup<FormBusca>({
      idaEvolta,
      origem: new FormControl('', [Validators.required]),
      destino: new FormControl('', [Validators.required]),
      tipo: new FormControl('Econômica'),
      dataIda: new FormControl(null, [Validators.required]),
      dataVolta,
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
      conexoes: new FormControl(0),
      companhias: new FormControl(null),
    });

    idaEvolta.valueChanges.subscribe((val) => {
      if (val) {
        dataVolta.addValidators([Validators.required]);
        dataVolta.enable();
      } else {
        dataVolta.clearValidators();
        dataVolta.disable();
      }
      dataVolta.updateValueAndValidity();
    });
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  getControl<T>(controlName: string): FormControl {
    const control = this.formBusca.get(controlName);
    if (!control) {
      throw new Error(`FormControl with name ${controlName} dosen't exist`);
    }
    return control as FormControl<T>;
  }

  getSearchData(): DadosBusca {
    const dataIdaControl = this.getControl<Date>('dataIda').value;
    const dataVoltaControl = this.getControl<Date>('dataVolta').value;
    const conexoesControl = this.getControl<number>('conexoes').value;
    let dataIda = '';
    if (dataIdaControl) {
      dataIda = dataIdaControl.toISOString();
    }

    const dadosBusca: DadosBusca = {
      pagina: 1,
      porPagina: 50,
      somenteIda: this.getControl<boolean>('idaEvolta').value,
      origemId: this.getControl<number>('origem').value.id,
      destinoId: this.getControl<number>('destino').value.id,
      tipo: this.getControl<string>('tipo').value,
      passageirosAdultos: this.getControl<number>('adultos').value,
      passageirosCriancas: this.getControl<number>('criancas').value,
      passageirosBebes: this.getControl<number>('bebes').value,
      dataIda: dataIda,
    };

    if (dataVoltaControl) {
      dadosBusca.dataVolta = dataVoltaControl.toISOString();
    }

    if (conexoesControl) {
      dadosBusca.conexoes = conexoesControl;
    }

    return dadosBusca;
  }

  getPassengersDescription(): string {
    let description = '';

    const adults = this.formBusca.get('adultos')?.value;
    if (adults && adults > 0) {
      description = `${adults} adulto${adults > 1 ? 's' : ''}`;
    }

    const children = this.formBusca.get('criancas')?.value;
    if (children && children > 0) {
      description += `${description ? ', ' : ''}${children} criança${children > 1 ? 's' : ''}`;
    }

    const babys = this.formBusca.get('bebes')?.value;
    if (babys && babys > 0) {
      description += `${description ? ', ' : ''}${babys} bebê${babys > 1 ? 's' : ''}`;
    }

    return description;
  }

  changeType(event: MatChipSelectionChange, value: string) {
    if (event.selected) {
      this.formBusca.patchValue({ tipo: value });
    }
  }

  isFormValid(): boolean {
    return this.formBusca.valid;
  }
}
