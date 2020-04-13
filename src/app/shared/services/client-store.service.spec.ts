import { TestBed } from '@angular/core/testing';

import { ClientStoreService } from './client-store.service';

describe('ClientStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientStoreService = TestBed.get(ClientStoreService);
    expect(service).toBeTruthy();
  });
});
