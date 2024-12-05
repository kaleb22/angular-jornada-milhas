import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-passagem-info',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './passagem-info.component.html',
  styleUrl: './passagem-info.component.scss',
})
export class PassagemInfoComponent {}
