import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeckShort } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DeckInformationMapperService {

  constructor(private http: HttpClient) { }

  getDesks() {
    return this.http.get<DeckShort[]>('http://localhost:3000/decks');
  }
}
