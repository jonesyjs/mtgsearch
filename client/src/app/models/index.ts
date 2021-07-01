export interface SearchParameters {
    title: string
}

export interface SearchResult {
    id: number,
    title: string,
    formats: string[],
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
    type: CardType,
    manaCost: number
}

export enum Rarity {
    Common = 'Common',
    Uncommon = 'Uncommon',
    Rare = 'Rare',
    Mythic = 'Mythic'
}

export enum CardType {
    Creature = 'Creature',
    Land = 'Land',
    Enchantment = 'Enchantment',
    Artifact = 'Artifact',
    Instant = 'Instant',
    Sorcery = 'Sorcery'
}