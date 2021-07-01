import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardType, CardTypeSummary, DeckInformation, ManaCostSummary, Rarity, RaritySummary, SearchResult } from '../../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckInformationMapperService {

  constructor(private http: HttpClient) { }

  getDesks() {
    return this.http.get<SearchResult[]>('http://localhost:3000/decks');
  }

  getDeckListShort(): Observable<SearchResult[]> {
    return of([
      { id: 1, title: "Red Deck Wins", formats: ['Standard', 'Commander'], colorTypes: ['Red'] },
      { id: 2, title: "Blue Counter", formats: ['Standard', 'Modern'], colorTypes: ['Blue'] },
      { id: 3, title: "Grixis Control", formats: ['Commander'], colorTypes: ['Black', 'Red', 'Blue'] }
    ]);
  }

  getDeckListFull(): Observable<DeckInformation[]> {
    
    var rarities: RaritySummary[] = [
      { rating: Rarity.Common, amountOf: 5 },
      { rating: Rarity.Uncommon, amountOf: 5 },
      { rating: Rarity.Rare, amountOf: 5 },
      { rating: Rarity.Mythic, amountOf: 5 }
    ]

    var manaCosts: ManaCostSummary[] = [
      { cost: 1, amountOf: 5 },
      { cost: 2, amountOf: 5 },
      { cost: 3, amountOf: 5 },
      { cost: 4, amountOf: 5 }
    ]

    var cardTypes: CardTypeSummary[] = [
      { type: CardType.Creature, amountOf: 5 },
      { type: CardType.Land, amountOf: 5 },
      { type: CardType.Enchantment, amountOf: 5 },
      { type: CardType.Artifact, amountOf: 5 },
      { type: CardType.Sorcery, amountOf: 5 },
      { type: CardType.Instant, amountOf: 5 }
    ]

    return of([
      { id: 1, title: "Red Deck Wins", summary: { formats: ['Standard', 'Commander'], colorTypes: ['Red'], rarities, manaCosts, cardTypes } },
      { id: 2, title: "Blue Counter", summary: { formats: ['Standard', 'Modern'], colorTypes: ['Blue'], rarities, manaCosts, cardTypes } },
      { id: 3, title: "Grixis Control", summary: { formats: ['Commander'], colorTypes: ['Black', 'Red', 'Blue'], rarities, manaCosts, cardTypes } }
    ]);
  } 
}
