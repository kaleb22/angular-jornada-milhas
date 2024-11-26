import { TestBed } from '@angular/core/testing';

import { DepoimentosService } from './depoimentos.service';
import { provideHttpClient } from '@angular/common/http';

describe('DepoimentosService', () => {
  let service: DepoimentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(DepoimentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
