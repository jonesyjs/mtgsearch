import { ColorIdentity, GameFormats } from "../constants";

export interface DeckShort {
    id: number,
    name: string,
    type: string,
}

export interface DeckFull extends DeckShort {
    ColorIdenties: ColorIdentity[],
    Formats: GameFormats[]
}