import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from '../card/card.component';
import { FormService } from '../../core/services/form.service';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CardComponent,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    ReactiveFormsModule,
    AutocompleteComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  formService = inject(FormService);

  @Output() searchEvent = new EventEmitter();

  onSubmit() {
    console.log(this.formService.formBusca.value);
  }

  changeOrigin() {
    const origem = this.formService.formBusca.get('origem')?.value;
    const destino = this.formService.formBusca.get('destino')?.value;

    this.formService.formBusca.patchValue({ origem: destino, destino: origem });
  }

  search(): void {
    if (this.formService.isFormValid()) {
      this.searchEvent.emit();
    } else {
      alert('Required fields must be filled');
    }
  }
}
