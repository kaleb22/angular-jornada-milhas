import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class FormValidator {
  static equalTo(otherField: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const fieldVal = control.value;
      const otherFieldVal = control.root.get(otherField)?.value;

      if (fieldVal !== otherFieldVal) {
        return { equalTo: true };
      }

      return null;
    };
  }
}
