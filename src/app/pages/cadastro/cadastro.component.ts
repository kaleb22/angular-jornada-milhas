import { Component, inject } from '@angular/core';

import { BannerComponent } from '../../shared/banner/banner.component';
import { FormGenericComponent } from '../../shared/form-generic/form-generic.component';
import { FormGenericService } from '../../core/services/form-generic.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [BannerComponent, FormGenericComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  private formGenericService = inject(FormGenericService);

  signUp(): void {
    const signForm = this.formGenericService.getForm();
    console.log('signed up successfully ', signForm?.value);
  }
}
