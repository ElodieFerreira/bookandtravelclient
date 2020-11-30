import { TestBed } from '@angular/core/testing';

import { PictureApiService } from './picture-api.service';

describe('PictureApiService', () => {
  let service: PictureApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PictureApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
