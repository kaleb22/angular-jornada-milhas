import { FormBusca } from './../../core/types/types';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { FormService } from '../../core/services/form.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatChipsModule,
    ActionButtonComponent,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  formService = inject(FormService);
}
