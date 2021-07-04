import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { CardTypeSummary } from 'src/app/models';

@Component({
  selector: 'app-graph-card-types',
  templateUrl: './graph-card-types.component.html',
  styleUrls: ['./graph-card-types.component.css']
})
export class GraphCardTypesComponent implements OnInit  {

  @Input('graphInfo') graphInfo: CardTypeSummary[]

  data: MultiDataSet = [[]];
  label: Label[] = [];
  chartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
    this.graphInfo.forEach((value) => {
      this.label.push(value.type);
      this.data[0].push(value.amountOf);
    });
  }

}
