import { TestBed } from '@angular/core/testing';

import { ThemeLoaderService } from './theme-loader.service';

describe('ThemeLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeLoaderService = TestBed.get(ThemeLoaderService);
    expect(service).toBeTruthy();
  });
});
