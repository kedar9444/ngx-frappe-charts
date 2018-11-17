import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  colors = ['#ebedf0', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e'];

  heatmapData = {
    dataPoints: this.getdatapoints(),
    start: new Date('2018-01-01'),
    end: new Date('2018-12-31')
  };
  barChartColor = ['#a8026f', '#db2d43', '#e76838'];
  barChartData = {
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun'],

    datasets: [
      {
        name: 'Some Data',
        values: [25, 40, 30, 35, 8, 52]
      },
      {
        name: 'Another Set',
        values: [25, 50, -10, 15, 18, 32]
      },
      {
        name: 'Yet Another',
        values: [15, 20, -3, -15, 58, 12]
      }
    ]
  };

  lineChartColor = ['#21e6c1', '#278ea5', '#1f4287'];
  lineChartData = {
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun'],

    datasets: [
      {
        name: 'Some Data',
        values: [25, 40, 30, 35, 8, 52]
      },
      {
        name: 'Another Set',
        values: [25, 50, -10, 15, 18, 32]
      },
      {
        name: 'Yet Another',
        values: [15, 20, -3, -15, 58, 12]
      }
    ]
  };

  mixedChartData = {
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun'],

    datasets: [
      {
        name: 'Some Data',
        chartType: 'bar',
        values: [25, 40, 30, 35, 8, 52]
      },
      {
        name: 'Another Set',
        chartType: 'bar',
        values: [25, 50, -10, 15, 18, 32]
      },
      {
        name: 'Yet Another',
        chartType: 'line',
        values: [15, 20, -3, -15, 58, 12]
      }
    ]
  };

  yMarkers = [{ label: 'Marker', value: 15, options: { labelPos: 'left' } }];
  yRegions = [
    { label: 'Region', start: 30, end: 50, options: { labelPos: 'right' } }
  ];

  getdatapoints() {
    const points = {};
    const now = new Date('2018-12-31');
    const daysOfYear = [];
    for (const d = new Date(2018, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {
      const date = d.getTime() / 1000;
      points[date] = Math.floor(Math.random() * 100 + 1);
    }
    return points;
  }
}
