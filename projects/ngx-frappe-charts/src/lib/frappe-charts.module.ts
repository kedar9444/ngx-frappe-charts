import { NgModule } from '@angular/core';
import { FrappeChartsHeatmapComponent } from './components/frappe-charts-heatmap.component';
import { FrappeChartsHeatmapDirective } from './directives/frappe-charts-heatmap.directive';
import { FrappeChartsPercentageComponent } from './components/frappe-charts-percentage.component';
import { FrappeChartsPercentageDirective } from './directives/frappe-charts-percentage.directive';
import { FrappeChartsBarComponent } from './components/frappe-charts-bar.component';
import { FrappeChartsAxisDirective } from './directives/frappe-charts-axis.directive';

@NgModule({
  imports: [],
  declarations: [
    FrappeChartsHeatmapComponent,
    FrappeChartsPercentageComponent,
    FrappeChartsBarComponent,
    FrappeChartsHeatmapDirective,
    FrappeChartsPercentageDirective,
    FrappeChartsAxisDirective
  ],
  exports: [
    FrappeChartsHeatmapComponent,
    FrappeChartsPercentageComponent,
    FrappeChartsBarComponent
  ]
})
export class FrappeChartsModule {}
