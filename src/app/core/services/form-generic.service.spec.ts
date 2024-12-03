import { TestBed } from '@angular/core/testing';

import { FormGenericService } from './form-generic.service';

describe('FormGenericService', () => {
  let service: FormGenericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormGenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
