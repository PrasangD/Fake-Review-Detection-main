import { TestBed } from '@angular/core/testing';

import { FkrevService } from './fkrev.service';

describe('FkrevService', () => {
  let service: FkrevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FkrevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
