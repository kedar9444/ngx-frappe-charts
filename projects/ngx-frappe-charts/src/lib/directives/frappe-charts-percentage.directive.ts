import { Directive, ElementRef, Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { FrappeChartsConstants } from '../constants/frappe-charts.constants';
import { BarOptions } from '../interfaces/percentage-bar-options.model';
import { GraphDataModel } from '../interfaces/graph-data.model';

declare var frappe: any;

@Directive({
  selector: '[ngxFrappeChartsPercentage]'
})
export class FrappeChartsPercentageDirective implements OnChanges {
  @Input() title?: string;
  @Input() data: GraphDataModel;
  @Input() colors?: string[];
  @Input() height?: number;
  @Input() type: string; // pie , percentage
  @Input() maxSlices?: number; // restrict number of slices
  @Input() barOptions?: BarOptions;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    const chart = new frappe.Chart(this.el.nativeElement, this.getPieInputs());
  }

  getPieInputs(): any {
    const pieobject = {};
    pieobject['colors'] = this.colors;
    pieobject['type'] = this.type;
    pieobject['title'] = this.title;
    pieobject['data'] = this.data;
    pieobject['height'] = this.height;
    pieobject['maxSlices'] = this.maxSlices;
    this.addBarOptions(pieobject);
    return pieobject;
  }

  addBarOptions(pieobject) {
    if (this.type === FrappeChartsConstants.chartType.percentage) {
      pieobject['barOptions'] = this.barOptions;
    }
  }
}
