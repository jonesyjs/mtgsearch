import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeckInformation } from 'src/app/models';
import { DeckSearchService } from 'src/app/services/deck-search-service/deck-search.service';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.css']
})
export class DeckDetailsComponent implements OnInit {

  $deckSummary: Observable<DeckInformation>

  //////////////////////////////////////////
  doughnutChartLabels: Label[] = ['Common', 'Uncommon', 'Rare', 'Mythic'];
  doughnutChartData: MultiDataSet = [[25, 25, 30, 20]];
  doughnutChartType: ChartType = 'doughnut';
  //////////////////////////////////////////
  barChartLabels: Label[] = ['1', '2', '3', '4', '5'];
  barChartType: ChartType = 'bar';
  barChartData: ChartDataSets[] = [{ data: [5, 10, 12, 7, 6], label: 'Mana Cost' }];
  //////////////////////////////////////////
  public pieChartLabels: Label[] = ['Creatures', 'Sorcey', 'Instants'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartColors = [{ backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'] }];
  //////////////////////////////////////////
  colorTypes = ['Black', 'Red'];
  availables = ['mtgo', 'paper'];
  formats = ['Standard', 'Modern'];
  //////////////////////////////////////////
  displayedColumns: string[] = ['name', 'type', 'colors', 'manaCost'];
  dataSource: any[] = [
    { name: 'Flying Squirel', colors: ['Black', 'Red'], type: 'Creature', manaCost: 2 },
    { name: 'Flying Squirel', colors: ['Black', 'Red'], type: 'Creature', manaCost: 2 },
    { name: 'Flying Squirel', colors: ['Black', 'Red'], type: 'Creature', manaCost: 2 },
    { name: 'Flying Squirel', colors: ['Black', 'Red'], type: 'Creature', manaCost: 2 },
    { name: 'Flying Squirel', colors: ['Black', 'Red'], type: 'Creature', manaCost: 2 },
    { name: 'Flying Squirel', colors: ['Black', 'Red'], type: 'Creature', manaCost: 2 },
    { name: 'Flying Squirel', colors: ['Black', 'Red'], type: 'Creature', manaCost: 2 },
    { name: 'Flying Squirel', colors: ['Black', 'Red'], type: 'Creature', manaCost: 2 },
    { name: 'Flying Squirel', colors: ['Black', 'Red'], type: 'Creature', manaCost: 2 },
    { name: 'Flying Squirel', colors: ['Black', 'Red'], type: 'Creature', manaCost: 2 }
  ];

  constructor(private deckService: DeckSearchService) { 
  }

  ngOnInit(): void {
    this.$deckSummary = this.deckService.deck$;
  }

}
