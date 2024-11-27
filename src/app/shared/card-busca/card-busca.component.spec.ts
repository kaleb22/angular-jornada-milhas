import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBuscaComponent } from './card-busca.component';
import { Promocao } from '../../core/types/types';

describe('CardBuscaComponent', () => {
  let component: CardBuscaComponent;
  let fixture: ComponentFixture<CardBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBuscaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardBuscaComponent);
    component = fixture.componentInstance;

    const promoMock: Promocao = {
      id: 1,
      imagem: 'src/test.png',
      preco: 1500,
      destino: 'Brazil',
    };
    fixture.componentRef.setInput('promocao', promoMock);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
