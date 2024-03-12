import { TestBed } from '@angular/core/testing';

import { GraphicsLoaderService } from './graphics-loader.service';

describe('GraphicsLoaderService', () => {
  let service: GraphicsLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphicsLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
