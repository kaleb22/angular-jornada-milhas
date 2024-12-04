import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { FormComponent } from '../../shared/form/form.component';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [BannerComponent, ContainerComponent, FormComponent],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss',
})
export class BuscaComponent {}
