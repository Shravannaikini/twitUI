import { TestBed } from '@angular/core/testing';

import { TataService } from './tata.service';

describe('TataService', () => {
  let service: TataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
