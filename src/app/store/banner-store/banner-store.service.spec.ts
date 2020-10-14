import { TestBed } from '@angular/core/testing';

import { BannerStoreService } from './banner-store.service';

describe('BannerStoreService', () => {
  let service: BannerStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
