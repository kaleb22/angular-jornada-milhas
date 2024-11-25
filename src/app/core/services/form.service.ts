import { FormBusca } from './../types/types';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  formGroup: FormGroup<FormBusca>;

  constructor() {
    this.formGroup = new FormGroup<FormBusca>({
      idaEvolta: new FormControl(false),
      origem: new FormControl(''),
      destino: new FormControl(''),
    });
  }
}
