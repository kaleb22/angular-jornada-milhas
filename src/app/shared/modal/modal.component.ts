import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { FormService } from '../../core/services/form.service';
import { PassageiroSelectComponent } from '../passageiro-select/passageiro-select.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatChipsModule,
    PassageiroSelectComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  formService = inject(FormService);

  closeModal(): void {
    this.formService.closeDialog();
  }
}
