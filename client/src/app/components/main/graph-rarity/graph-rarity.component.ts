import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { RaritySummary } from 'src/app/models';

@Component({
  selector: 'app-graph-rarity',
  templateUrl: './graph-rarity.component.html',
  styleUrls: ['./graph-rarity.component.css']
})
export class GraphRarityComponent implements OnInit {

  @Input('graphInfo') graphInfo: RaritySummary[]

  label: Label[] = [];
  data: number[] = [];
  chartType: ChartType = 'pie';
  colors = [{ backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'] }];

  constructor() { }

  ngOnInit(): void {
    this.graphInfo.forEach((value) => {
      this.data.push(value.amountOf);
      this.label.push(value.rating);
    });
  }

}
