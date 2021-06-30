import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SearchParameters, SearchResult } from 'src/app/models';
import { DeckInformationMapperService } from '../deck-information-service/deckinformationmapper.store';

@Injectable({
  providedIn: 'root'
})
export class DeckSearchService {


  private subject = new BehaviorSubject<SearchResult[]>([{title: 'hello', formats: ['modern'], colorTypes: ['black']}]);
  searchResults$: Observable<SearchResult[]> = this.subject.asObservable();

  constructor(private store: DeckInformationMapperService) { }

  search(searchParameters: SearchParameters): Observable<SearchResult[]> {
    return this.store.getDeckList().pipe(
      map(deckList => deckList.filter(o => o.title.includes(searchParameters.title))),
      tap(deckList => this.subject.next(deckList))
    )
  }
}
