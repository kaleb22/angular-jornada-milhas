import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-erro',
  standalone: true,
  imports: [BannerComponent, ContainerComponent, RouterLink],
  templateUrl: './erro.component.html',
  styleUrl: './erro.component.scss',
})
export class ErroComponent {}
