import { Directive, ElementRef, Input } from '@angular/core';
import { OnChanges } from '@angular/core';

declare var frappe: any; // just to avoid error marked by editor. Optional declaration

@Directive({
  selector: '[ngxFrappeChartsHeatmap]'
})
export class FrappeChartsHeatmapDirective implements OnChanges {
  @Input() title?: string;
  @Input() data: any;
  @Input() countLabel?: string;
  @Input() discreteDomains?: number;
  @Input() colors?: string[5];
  public readonly type = 'heatmap';

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    const chart = new frappe.Chart(
      this.el.nativeElement,
      this.getHeatmapInputs()
    );
  }

  getHeatmapInputs(): any {
    const heatmapobject = {};
    heatmapobject['countLabel'] = this.countLabel;
    heatmapobject['discreteDomains'] = this.discreteDomains;
    heatmapobject['colors'] = this.colors;
    heatmapobject['type'] = this.type;
    heatmapobject['title'] = this.title;
    heatmapobject['data'] = this.data;
    return heatmapobject;
  }
}
