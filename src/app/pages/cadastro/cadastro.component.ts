import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { FormGenericComponent } from '../../shared/form-generic/form-generic.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [BannerComponent, FormGenericComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  signUp(): void {
    console.log('signed up successfully');
  }
}
