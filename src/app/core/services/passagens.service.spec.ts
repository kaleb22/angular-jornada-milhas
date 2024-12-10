import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { PassagensService } from './passagens.service';

describe('PassagensService', () => {
  let service: PassagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(PassagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
