import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { DeckInformationMapperService } from './deckinformationmapper.store';
import { DeckShort } from '../../models';

describe('DeckinformationmapperService', () => {
  let service: DeckInformationMapperService,
      httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DeckInformationMapperService
      ]
    });

    service = TestBed.get(DeckInformationMapperService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should pull decks from api', () => {
    const expected: DeckShort[] = [
      { id: 1, name: 'Deck 1', type: 'Type 1' },
      { id: 2, name: 'Deck 2', type: 'Type 2' }
    ]

    service.getDesks().subscribe(sub => {
      expect(sub.length).toBe(2);
      expect(sub).toEqual(expected);

      const request = httpMock.expectOne('http://localhost:3000/decks');

      expect(request.request.method).toBe('GET');

      request.flush(expected);
    });
  })
});
