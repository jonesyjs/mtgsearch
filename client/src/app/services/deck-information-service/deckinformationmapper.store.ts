import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card, CardTypeSummary, DeckInformation, ManaCostSummary, RaritySummary, SearchResult, Store } from '../../models';
import { Observable, of } from 'rxjs';
import { CardType, Rarity } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class DeckInformationMapperService implements OnInit {

  private store: Store = {
    searchResults: [],
    decks: []
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getDecks().subscribe(decks => {
      this.store.decks = decks.map((deck, index) => {
        return {
          id: index + 1,
          title: deck.name,
          summary: {
            formats: this.getDeckFormats(deck.mainBoard),
            colorTypes: this.getDeckColors(deck.mainBoard),
            available: this.getDeckAvailable(deck.mainBoard),
            rarities: this.getDeckRarities(deck.mainBoard),
            manaCosts: this.getDeckManaCosts(deck.mainBoard),
            cardTypes: this.getDeckCardTypes(deck.mainBoard)
          },
          cards: this.getDeckCards(deck.mainBoard)
        }
      });

      this.store.searchResults = this.store.decks.map((deck) => { //can be constructed from partialModel
        return {
          id: deck.id,
          title: deck.title,
          colorTypes: deck.summary.colorTypes
        }
      })
    });
  }

  //public functions
  getDeckListShort(): Observable<SearchResult[]> {
    //return of(this.fakeDataShort());
    return of(this.store.searchResults);
  }

  getDeckListFull(): Observable<DeckInformation[]> {
    //return of(this.fakeDataLong());
    return of(this.store.decks);
  }

  //private functions
  private getDecks() {
    return this.http.get<any[]>('http://localhost:3000/decks');
  }

  private getDeckCards(mainBoard: any[]) {
    return mainBoard.reduce((acc, card) => {
      const mtgCard = {
        name: card.name,
        colors: card.colorIdentity,
        type: card.type,
        manaCost: card.convertedManaCost
      }
      acc.push(mtgCard);
      return acc;
    }, []);
  }
  
  private getDeckCardTypes(mainBoard: any[]) {
    var deckCardTypesStats = mainBoard.reduce((acc, board) => {
      acc[board.types[0]] = acc[board.types[0]] ? acc[board.types[0]] + 1 : 1;
      return acc;
    }, {});

    return Object.keys(deckCardTypesStats).reduce((acc, key) => {
      acc.push({
        type: key,
        amountOf: deckCardTypesStats[key]
      });
      return acc;
    }, []);
  }

  private getDeckManaCosts(mainBoard: any[]) {
    var manaCurveStats = mainBoard.reduce((acc, board) => {
      acc[board.convertedManaCost] = acc[board.convertedManaCost] ? acc[board.convertedManaCost] + 1 : 1;
      return acc;
    }, {});

    return Object.keys(manaCurveStats).reduce((acc, key) => {
      acc.push({
        cost: key,
        amountOf: manaCurveStats[key]
      });
      return acc;
    }, []);
  }

  private getDeckRarities(mainBoard: any[]) {
    var rarityStats = mainBoard.reduce((acc, board) => {
      acc[board.rarity] = acc[board.rarity] ? acc[board.rarity]+1 : 1;
      return acc; 
    }, {});

    return Object.keys(rarityStats).reduce((acc, key) => {
      acc.push({
        rating: key,
        amountOf: rarityStats[key]
      });
      return acc;
    }, []);
  }

  //Combine functions: getDeckColors, getDeckFormats, getDeckAvailable
  private getDeckColors(mainBoard: any[]) {
    return mainBoard.reduce((acc, card) => {
      return acc = [...new Set([...acc, ...card.colorIdentity])];
    }, []);
  }

  private getDeckFormats(mainBoard: any[]) {
    return mainBoard.reduce((acc, card) => {
      return acc = [...new Set([...acc, ...Object.keys(card.legalities)])];
    }, []);
  }

  private getDeckAvailable(mainBoard: any[]) {
    return mainBoard.reduce((acc, card) => {
      return acc = [...new Set([...acc, ...card.availability])];
    }, []);
  }

  fakeDataLong() {
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

    var data = [
      { id: 1, title: "Red Deck Wins", cards, summary: { formats: ['Standard', 'Commander'], colorTypes: ['Red'], available, rarities, manaCosts, cardTypes } },
      { id: 2, title: "Blue Counter", cards, summary: { formats: ['Standard', 'Modern'], colorTypes: ['Blue'], available, rarities, manaCosts, cardTypes } },
      { id: 3, title: "Grixis Control", cards, summary: { formats: ['Commander'], colorTypes: ['Black', 'Red', 'Blue'], available, rarities, manaCosts, cardTypes } }
    ];
    
    return data;
  }

  fakeDataShort() {
    return [
      { id: 1, title: "Red Deck Wins", colorTypes: ['Red'] },
      { id: 2, title: "Blue Counter", colorTypes: ['Blue'] },
      { id: 3, title: "Grixis Control", colorTypes: ['Black', 'Red', 'Blue'] }
    ];
  }
}
