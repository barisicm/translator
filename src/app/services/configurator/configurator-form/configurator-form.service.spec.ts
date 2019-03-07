import { TestBed } from '@angular/core/testing';

import { ConfiguratorFormService } from './configurator-form.service';

describe('ConfiguratorFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfiguratorFormService = TestBed.get(ConfiguratorFormService);
    expect(service).toBeTruthy();
  });
});
