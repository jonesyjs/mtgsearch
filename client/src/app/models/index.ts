import { CardType, Rarity } from "../constants";

export interface Store {
    searchResults: SearchResult[],
    decks: DeckInformation[]
}

export interface SearchParameters {
    title: string
}

export interface SearchResult {
    id: number,
    title: string,
    colorTypes: string[],
}

export interface DeckInformation {
    id: number,
    title: string,
    summary: {
        formats: string[],
        colorTypes: string[],
        available: string[],
        rarities: RaritySummary[],
        manaCosts: ManaCostSummary[],
        cardTypes: CardTypeSummary[]
    }
    cards: Card[]
}

export interface RaritySummary {
    rating: Rarity,
    amountOf: number
}

export interface ManaCostSummary {
    cost: number,
    amountOf: number
}

export interface CardTypeSummary {
    type: CardType,
    amountOf: number
}

export interface Card {
    name: string,
    colors: string[],
    type: string,
    manaCost: number
}