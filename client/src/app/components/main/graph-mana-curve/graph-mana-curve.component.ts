import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ManaCostSummary } from 'src/app/models';

@Component({
  selector: 'app-graph-mana-curve',
  templateUrl: './graph-mana-curve.component.html',
  styleUrls: ['./graph-mana-curve.component.css']
})
export class GraphManaCurveComponent implements OnInit {

  @Input('graphInfo') graphInfo: ManaCostSummary[]

  legend = true;
  data: ChartDataSets[] = [
    { data: [], label: 'Mana Cost' }
  ];
  label: Label[] = [];
  chartType: ChartType = 'bar';

  constructor() { }

  ngOnInit(): void {
    this.graphInfo.forEach((value) => {
      this.label.push(value.cost.toString());
      this.data[0].data.push(value.amountOf)
    });
  }
}
