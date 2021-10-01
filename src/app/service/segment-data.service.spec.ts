import { TestBed } from '@angular/core/testing';

import { SegmentDataService } from './segment-data.service';

describe('SegmentDataService', () => {
  let service: SegmentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegmentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
