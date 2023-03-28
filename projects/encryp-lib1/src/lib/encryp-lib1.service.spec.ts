import { TestBed } from '@angular/core/testing';

import { EncrypLib1Service } from './encryp-lib1.service';

describe('EncrypLib1Service', () => {
  let service: EncrypLib1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncrypLib1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
