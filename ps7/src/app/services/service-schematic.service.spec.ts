import { TestBed } from '@angular/core/testing';

import { ServiceSchematicService } from './service-schematic.service';

describe('ServiceSchematicService', () => {
  let service: ServiceSchematicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSchematicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
