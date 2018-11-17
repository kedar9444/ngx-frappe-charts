import { Component, Input } from '@angular/core';
import { BarOptions } from '../interfaces/percentage-bar-options.model';
import { GraphDataModel } from '../interfaces/graph-data.model';

@Component({
  selector: 'ngx-frappe-charts-percentage',
  template: `
    <div
      ngxFrappeChartsPercentage
      [title]="title"
      [colors]="colors"
      [height]="height"
      [data]="data"
      [type]="type"
      [barOptions]="barOptions"
    ></div>
  `
})
export class FrappeChartsPercentageComponent {
  @Input() data: GraphDataModel;
  @Input() title?: string;
  @Input() colors?: string[];
  @Input() height?: number;
  @Input() type?: string; // pie , percentage
  @Input() maxSlices?: number; // restrict number of slices
  @Input() barOptions?: BarOptions;
}
