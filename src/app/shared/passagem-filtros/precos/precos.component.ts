import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

import { FormService } from '../../../core/services/form.service';

@Component({
  selector: 'app-precos',
  standalone: true,
  imports: [CommonModule, MatSliderModule, ReactiveFormsModule],
  templateUrl: './precos.component.html',
  styleUrl: './precos.component.scss',
})
export class PrecosComponent implements OnInit {
  private formService = inject(FormService);

  @Input() precoMax: number;
  @Input() precoMin: number;

  precoMaxControl: FormControl<Number | null>;
  precoMinControl: FormControl<Number | null>;

  ngOnInit(): void {
    this.precoMaxControl = this.formService.getControl<Number>('precoMax');
    this.precoMinControl = this.formService.getControl<Number>('precoMin');
  }
}
