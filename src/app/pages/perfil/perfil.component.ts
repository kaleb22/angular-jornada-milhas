import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { FormGenericComponent } from '../../shared/form-generic/form-generic.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [BannerComponent, FormGenericComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
})
export class PerfilComponent {
  edit(): void {}

  signOut(): void {}
}
