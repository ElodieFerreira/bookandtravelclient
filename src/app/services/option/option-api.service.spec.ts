import { TestBed } from '@angular/core/testing';

import { OptionApiService } from './option-api.service';

describe('OptionApiService', () => {
  let service: OptionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
