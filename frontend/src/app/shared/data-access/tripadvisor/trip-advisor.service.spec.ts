import { TestBed } from '@angular/core/testing';

import { TripAdvisorService } from './trip-advisor.service';

describe('TripAdvisorService', () => {
  let service: TripAdvisorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripAdvisorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
