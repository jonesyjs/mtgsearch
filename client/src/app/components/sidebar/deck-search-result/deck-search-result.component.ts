import { Component, OnInit } from '@angular/core';
import { DeckSearchService } from 'src/app/services/deck-search-service/deck-search.service';

@Component({
  selector: 'app-deck-search-result',
  templateUrl: './deck-search-result.component.html',
  styleUrls: ['./deck-search-result.component.css']
})
export class DeckSearchResultComponent implements OnInit {

  constructor(public deskSearchService: DeckSearchService) { }

  ngOnInit(): void {
  }

}
