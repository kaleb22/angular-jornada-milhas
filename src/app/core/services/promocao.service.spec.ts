import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { PromocaoService } from './promocao.service';

describe('PromocaoService', () => {
  let service: PromocaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(PromocaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
