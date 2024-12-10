import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemFiltrosComponent } from './passagem-filtros.component';
import { ResultadoBusca } from '../../core/types/types';

describe('PassagemFiltrosComponent', () => {
  let component: PassagemFiltrosComponent;
  let fixture: ComponentFixture<PassagemFiltrosComponent>;
  let mockResultado: ResultadoBusca;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassagemFiltrosComponent],
    }).compileComponents();

    mockResultado = {
      paginaAtual: 0,
      ultimaPagina: 0,
      total: 0,
      precoMin: 0,
      precoMax: 10,
      resultado: [],
    };
    fixture = TestBed.createComponent(PassagemFiltrosComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('resultadoBusca', mockResultado);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
