import { TestBed } from '@angular/core/testing';

import { PokenodeService } from './pokenode.service';

describe('PokenodeService', () => {
  let service: PokenodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokenodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
