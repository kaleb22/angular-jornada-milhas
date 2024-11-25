import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { EstadosService } from './estados.service';

describe('EstadosService', () => {
  let service: EstadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(EstadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
