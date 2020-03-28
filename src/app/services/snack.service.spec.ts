import { TestBed } from '@angular/core/testing';

import { SnackService } from './snack-service.service';

describe('SnackServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnackService = TestBed.get(SnackService);
    expect(service).toBeTruthy();
  });
});
