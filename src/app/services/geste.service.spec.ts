import { TestBed } from '@angular/core/testing';

import { GesteService } from './geste.service';

describe('GesteService', () => {
  let service: GesteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GesteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
