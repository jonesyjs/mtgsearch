import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header/header.component';
import { DeckSearchComponent } from './components/header/deck-search/deck-search.component';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
import { DeckSearchResultComponent } from './components/sidebar/deck-search-result/deck-search-result.component';
import { MainComponent } from './components/main/main/main.component';
import { DeckDetailsComponent } from './components/main/deck-details/deck-details.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { GraphRarityComponent } from './components/main/graph-rarity/graph-rarity.component';
import { GraphManaCurveComponent } from './components/main/graph-mana-curve/graph-mana-curve.component';
import { GraphCardTypesComponent } from './components/main/graph-card-types/graph-card-types.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DeckSearchComponent,
    SidebarComponent,
    DeckSearchResultComponent,
    MainComponent,
    DeckDetailsComponent,
    GraphRarityComponent,
    GraphManaCurveComponent,
    GraphCardTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    ChartsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
