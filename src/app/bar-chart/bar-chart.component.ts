import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent {
  barchart1 = {
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun'],

    datasets: [
      {
        name: 'average transaction per day',
        values: [25, 40, 30, 35, 8, 52]
      }
    ]
  };

  barchart2 = {
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun'],

    datasets: [
      {
        name: 'Some Data',
        values: [25, 40, 30, 35, 8, 52]
      },
      {
        name: 'Another Set',
        values: [25, 50, 10, 15, 18, 32]
      },
      {
        name: 'Yet Another',
        values: [15, 20, 3, 15, 58, 12]
      }
    ]
  };

  barchart3 = {
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun'],

    datasets: [
      {
        name: 'Some Data',
        values: [25, 40, 30, 35, 8, 52]
      },
      {
        name: 'Another Set',
        values: [25, 50, 15, 18, 32, 27]
      },
      {
        name: 'Yet Another',
        values: [15, 20, 3, 58, 12, 17]
      }
    ]
  };

  barOptions = {
    stacked: 1
  };

  yMarkers = [{ label: 'Marker', value: 65, options: { labelPos: 'left' } }];
  yRegions = [
    { label: 'Region', start: 30, end: 120, options: { labelPos: 'right' } }
  ];
}
