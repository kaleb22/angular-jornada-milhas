import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormGenericService {
  signUpForm: FormGroup | null = null;

  getForm(): FormGroup | null {
    return this.signUpForm;
  }

  setForm(form: FormGroup) {
    this.signUpForm = form;
  }
}
