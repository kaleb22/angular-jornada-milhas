import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatButtonModule, ContainerComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
