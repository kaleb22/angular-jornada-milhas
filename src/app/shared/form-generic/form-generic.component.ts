import { MatFormFieldModule } from '@angular/material/form-field';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';

import { CardComponent } from '../card/card.component';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { FormGenericService } from '../../core/services/form-generic.service';
import { FormValidator } from '../form-validators';

@Component({
  selector: 'app-form-generic',
  standalone: true,
  imports: [
    CardComponent,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatRadioModule,
    AutocompleteComponent,
  ],
  templateUrl: './form-generic.component.html',
  styleUrl: './form-generic.component.scss',
})
export class FormGenericComponent implements OnInit {
  @Input() isPerfil: boolean;
  @Output() emitClick = new EventEmitter();

  private formBuilder = inject(FormBuilder);
  private genericFormService = inject(FormGenericService);

  formGeneric: FormGroup;
  estado = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.formGeneric = this.formBuilder.group({
      nome: new FormControl('', [Validators.required]),
      nascimento: new FormControl('', [Validators.required]),
      genero: new FormControl('feminino', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      estado: this.estado,
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        FormValidator.equalTo('confirmaEmail'),
      ]),
      confirmaEmail: new FormControl('', [
        Validators.required,
        Validators.email,
        FormValidator.equalTo('email'),
      ]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        FormValidator.equalTo('confirmaSenha'),
      ]),
      confirmaSenha: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        FormValidator.equalTo('senha'),
      ]),
      aceitarTermos: new FormControl(false, [Validators.requiredTrue]),
    });

    this.genericFormService.setForm(this.formGeneric);
  }

  clickAction(): void {
    this.emitClick.emit();
  }
}
