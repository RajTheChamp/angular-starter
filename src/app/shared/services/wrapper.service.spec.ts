import { TestBed } from '@angular/core/testing';

import { WrapperService } from './wrapper.service';

describe('WrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WrapperService = TestBed.get(WrapperService);
    expect(service).toBeTruthy();
  });
});
