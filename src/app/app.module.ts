import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrappeChartsModule } from 'ngx-frappe-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [AppComponent, BarChartComponent, PieChartComponent, LineChartComponent],
  imports: [BrowserModule, FrappeChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
