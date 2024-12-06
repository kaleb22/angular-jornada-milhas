import { inject, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatChipSelectionChange } from '@angular/material/chips';

import { FormBusca } from './../types/types';
import { ModalComponent } from '../../shared/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  formBusca: FormGroup<FormBusca>;
  readonly dialog = inject(MatDialog);

  constructor() {
    const idaEvolta = new FormControl(true, [Validators.required]);
    const dataVolta = new FormControl('', [Validators.required]);

    this.formBusca = new FormGroup<FormBusca>({
      idaEvolta,
      origem: new FormControl('', [Validators.required]),
      destino: new FormControl('', [Validators.required]),
      tipo: new FormControl('Econômica'),
      dataIda: new FormControl('', [Validators.required]),
      dataVolta,
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
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

  getControl(controlName: string): FormControl {
    const control = this.formBusca.get(controlName);
    if (!control) {
      throw new Error(`FormControl with name ${controlName} dosen't exist`);
    }
    return control as FormControl;
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
