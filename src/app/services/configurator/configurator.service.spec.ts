import { TestBed } from '@angular/core/testing';

import { ConfiguratorService } from './configurator.service';

describe('AppConfiguratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfiguratorService = TestBed.get(ConfiguratorService);
    expect(service).toBeTruthy();
  });
});
