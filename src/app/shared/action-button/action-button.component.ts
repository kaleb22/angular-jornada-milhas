import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss',
})
export class ActionButtonComponent implements OnInit {
  @Input() action: 'increment' | 'decrement' = 'increment';
  src = '';
  alt = '';

  ngOnInit() {
    if (this.action === 'increment') {
      this.src = 'icones/add_circle.png';
      this.alt = 'increment operator';
    } else {
      this.src = 'icones/do_not_disturb_on.png';
      this.alt = 'decrement operator';
    }
  }
}
