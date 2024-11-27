import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'app-passageiro-select',
  standalone: true,
  imports: [ActionButtonComponent, ReactiveFormsModule],
  templateUrl: './passageiro-select.component.html',
  styleUrl: './passageiro-select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PassageiroSelectComponent),
      multi: true,
    },
  ],
})
export class PassageiroSelectComponent implements ControlValueAccessor {
  @Input() title: string;
  @Input() description: string;

  value: number = 0;
  disabled: boolean = false;
  onChange = (val: number) => {};
  onTouch = () => {};

  writeValue(val: number): void {
    this.value = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  decrement() {
    if (this.value > 0) {
      this.value -= 1;
      this.onChange(this.value);
      this.onTouch();
    }
  }

  increment() {
    this.value += 1;
    this.onChange(this.value);
    this.onTouch();
  }
}
