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
        rarities: RaritySummary[],
        manaCosts: ManaCostSummary[],
        cardTypes: CardTypeSummary[]
    }
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

export enum Rarity {
    Common,
    Uncommon,
    Rare,
    Mythic
}

export enum CardType {
    Creature,
    Land,
    Enchantment,
    Artifact,
    Instant,
    Sorcery
}