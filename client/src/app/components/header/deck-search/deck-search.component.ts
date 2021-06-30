import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchParameters } from 'src/app/models';
import { DeckSearchService } from 'src/app/services/deck-search-service/deck-search.service';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-deck-search',
  templateUrl: './deck-search.component.html',
  styleUrls: ['./deck-search.component.css']
})
export class DeckSearchComponent {

  searchForm = this.fb.group({
    text: ['']
  })

  constructor(private fb: FormBuilder, public deskSearchService: DeckSearchService) {}

  search() {
    var parameters: SearchParameters = { title: this.searchForm.value.text};
    var subscription = this.deskSearchService.search(parameters).subscribe();

    subscription.unsubscribe();
  }
}
