import { Component, Input } from '@angular/core';
import { HeatmapDataModel } from '../interfaces/heatmap-data.model';

@Component({
  selector: 'ngx-frappe-charts-heatmap',
  template: `
    <div
      ngxFrappeChartsHeatmap
      [title]="title"
      [countLabel]="countLabel"
      [discreteDomains]="discreteDomains"
      [colors]="colors"
      [data]="data"
    ></div>
  `
})
export class FrappeChartsHeatmapComponent {
  @Input() data: HeatmapDataModel;
  @Input() title?: string;
  @Input() countLabel?: string;
  @Input() discreteDomains?: number;
  @Input() colors?: string[5];
}

