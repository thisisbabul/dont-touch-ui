import { TestBed } from '@angular/core/testing';

import { DonttouchService } from './donttouch.service';

describe('DonttouchService', () => {
  let service: DonttouchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonttouchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
