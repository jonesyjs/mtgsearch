import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeckInformationMapperService } from './services/deck-information-service/deckinformationmapper.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private deckStore: DeckInformationMapperService) {}

  ngOnInit() {
    this.deckStore.ngOnInit();
  }
}
