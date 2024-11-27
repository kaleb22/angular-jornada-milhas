import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDepoimentoComponent } from './card-depoimento.component';
import { Depoimento } from '../../core/types/types';

describe('CardDepoimentoComponent', () => {
  let component: CardDepoimentoComponent;
  let fixture: ComponentFixture<CardDepoimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDepoimentoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardDepoimentoComponent);
    component = fixture.componentInstance;
    const mockDepoimento: Depoimento = {
      id: 0,
      autor: 'John Doe',
      texto: 'bla bla bla',
      avatar: 'src/avatar.png',
    };
    fixture.componentRef.setInput('depoimento', mockDepoimento);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
