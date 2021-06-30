import { TestBed } from '@angular/core/testing';

import { DeckSearchService } from './deck-search.service';

describe('DeckSearchService', () => {
  let service: DeckSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
