import { Component, inject } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from '../card/card.component';
import { ModalComponent } from '../modal/modal.component';
import { FormService } from '../../core/services/form.service';
import { EstadosService } from '../../core/services/estados.service';
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
  readonly dialog = inject(MatDialog);
  formService = inject(FormService);
  estadosService = inject(EstadosService);

  estados$ = this.estadosService.estados$;

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
