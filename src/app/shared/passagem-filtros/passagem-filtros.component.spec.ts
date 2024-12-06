import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemFiltrosComponent } from './passagem-filtros.component';

describe('PassagemFiltrosComponent', () => {
  let component: PassagemFiltrosComponent;
  let fixture: ComponentFixture<PassagemFiltrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassagemFiltrosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PassagemFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
