import { Directive, ElementRef, Input } from '@angular/core';
import { OnChanges } from '@angular/core';

import { AxisOptions } from '../interfaces/axis-options.model';
import { TooltipOptions } from '../interfaces/tooltip-options.model';
import { BarOptions } from '../interfaces/bar-options.model';
import { LineOptions } from '../interfaces/line-options.model';
import { YMarkers } from '../interfaces/y-markers.model';
import { YRegions } from '../interfaces/y-regions.model';
import { FrappeChartsConstants } from '../constants/frappe-charts.constants';
import { GraphDataModel } from '../interfaces/graph-data.model';

declare var frappe: any;

@Directive({
  selector: '[ngxFrappeChartsAxis]'
})
export class FrappeChartsAxisDirective implements OnChanges {
  @Input() data: GraphDataModel;
  @Input() type: string; // 'line'
  @Input() title?: string;
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

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    const chart = new frappe.Chart(this.el.nativeElement, this.getAxisInputs());
  }

  getAxisInputs(): any {
    const barObject = {};
    barObject['colors'] = this.colors;
    barObject['type'] = this.type;
    barObject['title'] = this.title;
    barObject['height'] = this.height;
    barObject['isNavigable'] = this.isNavigable;
    barObject['valuesOverPoints'] = this.valuesOverPoints;
    barObject['axisOptions'] = this.axisOptions;
    barObject['tooltipOptions'] = this.tooltipOptions;

    this.addGraphData(barObject);
    this.addLineOptions(barObject);
    this.addBarOptions(barObject);

    return barObject;
  }

  addLineOptions(barObject) {
    if (
      this.type === FrappeChartsConstants.chartType.line ||
      this.type === FrappeChartsConstants.chartType.axismixed
    ) {
      barObject['lineOptions'] = this.lineOptions;
    }
  }

  addBarOptions(barObject) {
    if (
      this.type === FrappeChartsConstants.chartType.bar ||
      this.type === FrappeChartsConstants.chartType.axismixed
    ) {
      barObject['barOptions'] = this.barOptions;
    }
  }

  addGraphData(barObject) {
    const data = this.data;
    if (this.yMarkers) {
      data['yMarkers'] = this.yMarkers;
    }

    if (this.yRegions) {
      data['yRegions'] = this.yRegions;
    }

    barObject['data'] = data;
  }
}
