import { TestBed } from '@angular/core/testing';

import { LanguageFetchService } from './language-fetch.service';

describe('LanguageFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanguageFetchService = TestBed.get(LanguageFetchService);
    expect(service).toBeTruthy();
  });
});
