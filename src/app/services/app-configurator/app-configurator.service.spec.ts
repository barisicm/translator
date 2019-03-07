import { TestBed } from '@angular/core/testing';

import { AppConfiguratorService } from './app-configurator.service';

describe('AppConfiguratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppConfiguratorService = TestBed.get(AppConfiguratorService);
    expect(service).toBeTruthy();
  });
});
