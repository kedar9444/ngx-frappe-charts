import { Component } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent {
  lineOptions1 = {
    dotSize: 10
  };

  lineOptions2 = {
    regionFill: 1
  };

  barchart1 = {
    labels: [
      'jan',
      'feb',
      'mar',
      'apr',
      'may',
      'jun',
      'jul',
      'aug',
      'sep',
      'oct',
      'nov',
      'dec'
    ],

    datasets: [
      {
        name: 'average transaction per day',
        values: [25, 30, 33, 40, 55, 30, 67, 70, 72, 80, 85, 90]
      }
    ]
  };

  axisOptions = {
    xIsSeries: true // default: false
  };

  barchart2 = {
    labels: this.getLable(),

    datasets: [
      {
        name: 'Some Data',
        values: this.getDataset()
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

  yMarkers = [{ label: 'Marker', value: 15, options: { labelPos: 'left' } }];
  yRegions = [
    { label: 'Region', start: 30, end: 50, options: { labelPos: 'right' } }
  ];

  getLable() {
    const labels: string[] = [];
    for (let i = 0; i < 50; i++) {
      const x = 1990 + i;
      labels.push(x.toString());
    }
    return labels;
  }

  getDataset() {
    const dataset: number[] = [];
    for (let i = 0; i < 50; i++) {
      dataset.push(Math.floor(Math.random() * 10 + 1));
    }
    return dataset;
  }
}
