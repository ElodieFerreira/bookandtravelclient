import { TestBed } from '@angular/core/testing';

import { BienApiService } from './bien-api.service';

describe('BienApiService', () => {
  let service: BienApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BienApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
