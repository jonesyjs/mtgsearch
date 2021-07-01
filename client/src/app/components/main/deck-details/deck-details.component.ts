import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeckInformation } from 'src/app/models';
import { DeckSearchService } from 'src/app/services/deck-search-service/deck-search.service';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.css']
})
export class DeckDetailsComponent implements OnInit {

  $deckSummary: Observable<DeckInformation>

  constructor(private deckService: DeckSearchService) { }

  ngOnInit(): void {
    this.$deckSummary = this.deckService.deck$;
  }

}
