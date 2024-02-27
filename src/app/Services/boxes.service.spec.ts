import { TestBed } from '@angular/core/testing';

import { BoxesService } from './boxes.service';

describe('BoxesService', () => {
  let service: BoxesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
