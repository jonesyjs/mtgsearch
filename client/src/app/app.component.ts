import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  obs: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getDecks() {
    this.obs = this.http.get('http://localhost:3000/decks');
  }
}
