import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent {
  barOptionsPercentage = {
    height: 35, // default: 20
    depth: 10 // default: 2
  };

  constructor() {}

  piechart1 = {
    labels: [
      'Algolia',
      'Firebase',
      '.Net MVC',
      'Angular',
      'C#',
      'bootstrap',
      'javascript'
    ],
    datasets: [
      {
        name: 'Year 2013',
        values: [3, 8, 38, 30, 5, 8, 8]
      }
    ]
  };

  piechart2 = {
    labels: [
      'Algolia',
      'Firebase',
      '.Net MVC',
      'Angular',
      'C#',
      'bootstrap',
      'javascript'
    ],
    datasets: [
      {
        name: 'Year 2014',
        values: [3, 8, 38, 30, 5, 8, 8]

      }
    ]
  };

  piechart3 = {
    labels: ['ICICI', 'PNB', 'Nordea', 'BOI', 'BOA', 'BOB', 'AXIS'],
    datasets: [
      {
        name: 'Year 2015',
        values: [12, 18, 18, 12, 20, 20]
      }
    ]
  };
}
