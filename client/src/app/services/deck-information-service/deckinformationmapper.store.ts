import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from '../../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckInformationMapperService {

  constructor(private http: HttpClient) { }

  getDesks() {
    return this.http.get<SearchResult[]>('http://localhost:3000/decks');
  }

  getDeckList(): Observable<SearchResult[]> {
    return of([
      { title: "Red Deck Wins", formats: ['Standard', 'Commander'], colorTypes: ['Red'] },
      { title: "Blue Counter", formats: ['Standard', 'Modern'], colorTypes: ['Blue'] },
      { title: "Grixis Control", formats: ['Commander'], colorTypes: ['Black', 'Red', 'Blue'] }
    ]);
  }
}
