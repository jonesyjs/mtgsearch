import { Component, OnInit } from '@angular/core';

interface SearchResult {
  title: string,
  formats: string[],
  colorTypes: string[]
}

@Component({
  selector: 'app-deck-search-result',
  templateUrl: './deck-search-result.component.html',
  styleUrls: ['./deck-search-result.component.css']
})
export class DeckSearchResultComponent implements OnInit {

  searchResults: SearchResult[] = [
    { title: "Red Deck Wins", formats: ['Standard', 'Commander'], colorTypes: ['Red'] },
    { title: "Blue Counter", formats: ['Standard', 'Modern'], colorTypes: ['Blue'] },
    { title: "Grixis Control", formats: ['Commander'], colorTypes: ['Black', 'Red', 'Blue'] }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
