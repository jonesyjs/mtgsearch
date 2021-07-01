import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card, DeckInformation, Rarity } from 'src/app/models';
import { DeckSearchService } from 'src/app/services/deck-search-service/deck-search.service';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartType } from 'chart.js';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.css']
})
export class DeckDetailsComponent implements OnInit {

  //////////////////////////////////////////
  doughnutChartLabels: Label[] = [Rarity.Common, Rarity.Uncommon, Rarity.Rare, Rarity.Mythic];
  doughnutChartData: MultiDataSet = [[5, 15, 3, 12]];
  doughnutChartType: ChartType = 'doughnut';
  //////////////////////////////////////////
  barChartLabels: Label[] = ['1', '2', '3', '4', '5'];
  barChartType: ChartType = 'bar';
  barChartData: ChartDataSets[] = [{ data: [5, 10, 12, 7, 6], label: 'Mana Cost' }];
  //////////////////////////////////////////
  pieChartLabels: Label[] = ['Creatures', 'Sorcey', 'Instants'];
  pieChartData: number[] = [300, 500, 100];
  pieChartType: ChartType = 'pie';
  pieChartColors = [{ backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'] }];

  //deck summary - summaries
  colorTypes: string[];
  availables: string[];
  formats: string[];

  //cardList
  displayedColumns: string[] = ['name', 'type', 'colors', 'manaCost'];
  dataSource: Card[];

  $deckSummary: Observable<DeckInformation>

  constructor(public deckService: DeckSearchService) { 
  }

  ngOnInit(): void {}

}
