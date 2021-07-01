import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card, CardType, CardTypeSummary, DeckInformation, ManaCostSummary, Rarity, RaritySummary, SearchResult } from '../../models';
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
      { cost: 2, amountOf: 7 },
      { cost: 3, amountOf: 9 },
      { cost: 4, amountOf: 11 }
    ]

    var cardTypes: CardTypeSummary[] = [
      { type: CardType.Creature, amountOf: 5 },
      { type: CardType.Land, amountOf: 5 },
      { type: CardType.Enchantment, amountOf: 5 },
      { type: CardType.Artifact, amountOf: 5 },
      { type: CardType.Sorcery, amountOf: 5 },
      { type: CardType.Instant, amountOf: 5 }
    ]

    var available = ['mtgo', 'paper'];

    var cards: Card[] = [
      { name: 'Flying Squirel', colors: ['Black', 'Red'], type: CardType.Creature, manaCost: 2 },
      { name: 'Flying Squirel', colors: ['Black', 'Red'], type: CardType.Creature, manaCost: 2 },
      { name: 'Flying Squirel', colors: ['Black', 'Red'], type: CardType.Creature, manaCost: 2 },
      { name: 'Flying Squirel', colors: ['Black', 'Red'], type: CardType.Creature, manaCost: 2 },
      { name: 'Flying Squirel', colors: ['Black', 'Red'], type: CardType.Creature, manaCost: 2 }
    ]

    return of([
      { id: 1, title: "Red Deck Wins", cards, summary: { formats: ['Standard', 'Commander'], colorTypes: ['Red'], available, rarities, manaCosts, cardTypes } },
      { id: 2, title: "Blue Counter", cards, summary: { formats: ['Standard', 'Modern'], colorTypes: ['Blue'], available, rarities, manaCosts, cardTypes } },
      { id: 3, title: "Grixis Control", cards, summary: { formats: ['Commander'], colorTypes: ['Black', 'Red', 'Blue'], available, rarities, manaCosts, cardTypes } }
    ]);
  }
}
