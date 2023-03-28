import { TestBed } from '@angular/core/testing';

import { EncrypLibService } from './encryp-lib.service';

describe('EncrypLibService', () => {
  let service: EncrypLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncrypLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
