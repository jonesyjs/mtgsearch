import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card, DeckInformation } from 'src/app/models';
import { DeckSearchService } from 'src/app/services/deck-search-service/deck-search.service';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.css']
})
export class DeckDetailsComponent implements OnInit {
  colorTypes: string[];
  availables: string[];
  formats: string[];

  displayedColumns: string[] = ['name', 'type', 'colors', 'manaCost'];
  dataSource: Card[];

  $deckSummary: Observable<DeckInformation>

  constructor(public deckService: DeckSearchService) { 
  }

  ngOnInit(): void {}

}
