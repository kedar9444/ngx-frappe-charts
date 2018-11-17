import { Component, Input } from '@angular/core';
import { AxisOptions } from '../interfaces/axis-options.model';
import { TooltipOptions } from '../interfaces/tooltip-options.model';
import { BarOptions } from '../interfaces/bar-options.model';
import { LineOptions } from '../interfaces/line-options.model';
import { YMarkers } from '../interfaces/y-markers.model';
import { YRegions } from '../interfaces/y-regions.model';
import { GraphDataModel } from '../interfaces/graph-data.model';

@Component({
  selector: 'ngx-frappe-charts-bar',
  template: `
    <div
      ngxFrappeChartsAxis
      [title]="title"
      [colors]="colors"
      [height]="height"
      [data]="data"
      [type]="type"
      [isNavigable]="isNavigable"
      [valuesOverPoints]="valuesOverPoints"
      [axisOptions]="axisOptions"
      [tooltipOptions]="tooltipOptions"
      [barOptions]="barOptions"
      [lineOptions]="lineOptions"
      [yMarkers]="yMarkers"
      [yRegions]="yRegions"
    ></div>
  `
})
export class FrappeChartsBarComponent {
  @Input() data: GraphDataModel;
  @Input() title?: string;
  @Input() type?: string;
  @Input() colors?: string[];
  @Input() height?: number; // 240;
  @Input() isNavigable?: boolean; // false;
  @Input() valuesOverPoints?: boolean; // false;
  @Input() axisOptions?: AxisOptions;
  @Input() tooltipOptions?: TooltipOptions;
  @Input() barOptions?: BarOptions;
  @Input() lineOptions?: LineOptions;
  @Input() yMarkers: YMarkers[];
  @Input() yRegions: YRegions[];
}
