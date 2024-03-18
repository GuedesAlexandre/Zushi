import { TestBed } from '@angular/core/testing';

import { CommandePostService } from './commande-post.service';

describe('CommandePostService', () => {
  let service: CommandePostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandePostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
