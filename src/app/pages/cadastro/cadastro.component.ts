import { Component, inject } from '@angular/core';

import { BannerComponent } from '../../shared/banner/banner.component';
import { FormGenericComponent } from '../../shared/form-generic/form-generic.component';
import { FormGenericService } from '../../core/services/form-generic.service';
import { CadastroService } from '../../core/services/cadastro.service';
import { User } from '../../core/types/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [BannerComponent, FormGenericComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  private formGenericService = inject(FormGenericService);
  private cadastroService = inject(CadastroService);
  private router = inject(Router);

  signUp(): void {
    const signForm = this.formGenericService.getForm();

    if (signForm?.valid) {
      const userData = signForm.getRawValue() as User;
      this.cadastroService.cadastrar(userData).subscribe({
        next: () => this.router.navigateByUrl('/login'),
        error: (e) => console.log('erro no cadastro ', e),
      });
    }
  }
}
