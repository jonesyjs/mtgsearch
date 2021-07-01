import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators';
import { DeckInformation, SearchParameters, SearchResult } from 'src/app/models';
import { DeckInformationMapperService } from '../deck-information-service/deckinformationmapper.store';

@Injectable({
  providedIn: 'root'
})
export class DeckSearchService {
  
  private subjectDeckList = new BehaviorSubject<SearchResult[]>([{id: 0, title: 'hello', formats: ['modern'], colorTypes: ['black']}]);
  searchResults$: Observable<SearchResult[]> = this.subjectDeckList.asObservable();

  private subjectDeck = new BehaviorSubject<DeckInformation>(null);
  deck$: Observable<DeckInformation> = this.subjectDeck.asObservable();

  constructor(private store: DeckInformationMapperService) { }

  search(searchParameters: SearchParameters): Observable<SearchResult[]> {
    return this.store.getDeckListShort().pipe(
      map(deckList => deckList.filter(o => o.title.includes(searchParameters.title))),
      tap(deckList => this.subjectDeckList.next(deckList))
    )
  }

  getDeckById(id: Number): Observable<DeckInformation> {
    console.log('we are here')
    return this.store.getDeckListFull().pipe(
      map(deckList => {
        console.log(deckList);
        var x = deckList.filter(o => o.id == id)[0];
        console.log(x);
        return x;
      }),
      tap(deck => this.subjectDeck.next(deck))
    )
  }
}
