import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemInfoComponent } from './passagem-info.component';
import { Passagem } from '../../core/types/types';

describe('PassagemInfoComponent', () => {
  let component: PassagemInfoComponent;
  let fixture: ComponentFixture<PassagemInfoComponent>;
  let passagemMock: Passagem;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassagemInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PassagemInfoComponent);
    component = fixture.componentInstance;
    passagemMock = {
      tipo: '',
      precoIda: 0,
      precoVolta: 0,
      taxaEmbarque: 0,
      conexoes: 0,
      tempoVoo: 0,
      origem: {
        id: 0,
        nome: 'string',
        sigla: 'string',
      },
      destino: { id: 0, nome: 'string', sigla: 'string' },
      companhia: {
        id: 0,
        nome: 'string',
      },
      dataIda: '',
      dataVolta: '',
      total: 0,
      orcamento: [],
    };
    fixture.componentRef.setInput('passagem', passagemMock);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
