<div align="center">
    <img src="https://github.com/kedar9444/ngx-frappe-charts/blob/master/resources/logo/logo-sm.png" height="128">
    <a href="https://www.npmjs.com/package/ngx-frappe-chart">
        <h2>Ngx-Frappe-Chart</h2>
    </a>
    <p align="center">
        <p>A simple and easy to use angular wrapper on top of frappe for generating awesome graphs.</p>
        <a href="https://www.npmjs.com/package/ngx-frappe-chart">
            <b>Download NPM Package » </b>
        </a>
        <a href="https://stackblitz.com/edit/ngx-frappe-chart-demo?embed=1&file=src/app/app.component.html">
            <b> Edit at Stackbliz »</b>
        </a>
    </p>
</div>

## Install

Install the package.

```sh
$ npm i -s ngx-frappe-chart
```

Add the frappe library to your Angular.json file:

**`angular.json`**

```json
"scripts": ["./projects/ngx-frappe-charts/node_modules/frappe-charts/dist/frappe-charts.min.iife.js"]
```

Declare the component in your module:

**`src/app/app.module.ts`**

```ts
import { FrappeChartsModule } from 'ngx-frappe-chart';

...

@NgModule({
	...
	imports: [
    ...
      FrappeChartsModule,
		...
	],
	...
})
```

# Usage

Ngx-frappy-chart exports 3 different components i.e. bar, pie, and heatmap to draw similar charts. We will check each one them and how to use them.

## Bar chart, Line chart and Axis-Mixed chart tag

This component is used for drawing bar, line and mixed charts. you have to add the componant as follows.

```html
<ngx-frappe-charts-bar
  [type]="'bar'"
  [data]="barChartData"
  [height]="500"
  [yMarkers]="yMarkers"
  [yRegions]="yRegions"
  [colors]="barChartColor"
>
</ngx-frappe-charts-bar>
```

### Valid inputs

Valid inputs foe drawing bar, line and axis-mixed charts are as follows.

<table>
  <tr>
    <th>Input</th>
    <th>Type</th>
    <th>Valid Input values</th>
  </tr>
  <tr>
    <td>data</td>
    <td>GraphDataModel</td>
    <td> - </td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td>-</td>
  </tr>
  <tr>
    <td>type</td>
    <td>string</td>
    <td>bar , line , axis-mixed </td>
  </tr>
    <tr>
    <td>colors</td>
    <td>string[]</td>
    <td>Hexadecimal values for colors including # e.g ['#a8026f', '#db2d43', '#e76838']</td>
  </tr>
    <tr>
    <td>height</td>
    <td>number</td>
    <td>default 240</td>
  </tr>
      <tr>
    <td>isNavigable</td>
    <td>boolean</td>
    <td>true or false, default false</td>
  </tr>
  <tr>
    <td>valuesOverPoints</td>
    <td>boolean</td>
    <td>true or false, default false</td>
  </tr>
    <tr>
    <td>axisOptions</td>
    <td>AxisOptions</td>
    <td> - </td>
  </tr>
      <tr>
    <td>tooltipOptions</td>
    <td>TooltipOptions</td>
    <td></td>
  </tr>
      <tr>
    <td>barOptions</td>
    <td>BarOptions</td>
    <td></td>
  </tr>
      <tr>
    <td>lineOptions</td>
    <td>LineOptions</td>
    <td></td>
  </tr>
      <tr>
    <td>yMarkers</td>
    <td>YMarkers[]</td>
    <td></td>
  </tr>
      <tr>
    <td>yRegions</td>
    <td>YRegions[]</td>
    <td></td>
  </tr>

</table>

### Custom models

where `GraphDataModel` , `AxisOptions` , `TooltipOptions` , `BarOptions` , `LineOptions`, `YMarkers` , `YRegions` are interfaces as follows.

**`graph-data.model.ts`**

```ts
export interface GraphDataModel {
  labels: string[];
  datasets: GraphDatasetModel[];
}

export interface GraphDatasetModel {
  name: string;
  chartType?: string;
  values: number[];
}
```

**`axis-options.model.ts`**

```ts
export interface AxisOptions {
  xIsSeries?: boolean; // default: false
  xAxisMode?: string; // default: 'span'
  yAxisMode?: string; // default: 'span'
}
```

**`tooltip-options.model.ts`**

```ts
export interface TooltipOptions {
  formatTooltipX: any; // formatTooltipX: d => (d + '').toUpperCase(),
  formatTooltipY: any; // formatTooltipY: d => d + ' pts',
}
```

**`bar-options.model.ts`**

```ts
export interface BarOptions {
  spaceRatio: number; // default: 1
  stacked: number; // default 0,
}
```

**`line-options.model.ts`**

```ts
export interface LineOptions {
  dotSize: number; // default: 4
  regionFill: number; // default: 0
  hideDots: number; // default: 0
  hideLine: number; // default: 0
  heatline: number; // default: 0
}
```

**`ymarkers.model.ts`**

```ts
export interface YMarkers {
  label: string;
  value: number;
  options: LabelPosition;
}
```

**`yregions.model.ts`**

```ts
export interface YRegions {
  label: string;
  start: number;
  end: number;
  options: LabelPosition;
}
```

**`label-position.model.ts`**

```ts
export interface LabelPosition {
  labelPos: string; // 'left' | 'right'
}
```

## Percentage chart tag

This component is used for drawing pie and percentage charts. you have to add the componant as follows.

```html
<ngx-frappe-charts-percentage 
  [type]="'pie'" 
  [data]="piechart1" 
  [height]="500">
</ngx-frappe-charts-percentage>

<ngx-frappe-charts-percentage
  [type]="'percentage'"
  [data]="piechart1"
  [height]="500">
</ngx-frappe-charts-percentage>
```

### Valid inputs

Valid inputs foe drawing pecentage charts are as follows.

<table>
  <tr>
    <th>Input</th>
    <th>Type</th>
    <th>Valid Input values</th>
  </tr>
  <tr>
    <td>data</td>
    <td>GraphDataModel</td>
    <td> - </td>
  </tr>
    <tr>
    <td>title</td>
    <td>string</td>
    <td> - </td>
  </tr>
      <tr>
    <td>colors</td>
    <td>string[]</td>
    <td> - </td>
  </tr>
      <tr>
    <td>height</td>
    <td>number</td>
    <td> - </td>
  </tr>
      <tr>
    <td>type</td>
    <td>string</td>
    <td> - </td>
  </tr>
      <tr>
    <td>maxSlices</td>
    <td>number</td>
    <td> - </td>
  </tr>
        <tr>
    <td>barOptions</td>
    <td>BarOptions</td>
    <td> - </td>
  </tr>
</table>

### Custom models

where `GraphDataModel` , `BarOptions` are interfaces as follows.

**`graph-data.model.ts`**

```ts
export interface GraphDataModel {
  labels: string[];
  datasets: GraphDatasetModel[];
}

export interface GraphDatasetModel {
  name: string;
  chartType?: string;
  values: number[];
}
```

**`bar-options.model.ts`**

```ts
export interface BarOptions {
  height: number; // default: 20 only for barF
  depth: number; // default: 2 only for bar
}
```


## Heatmap chart tag

This component is used for drawing Heatmap charts. you have to add the componant as follows.

```html
    <ngx-frappe-charts-heatmap 
      [data]="heatmapData"
      [countLabel]="'count'"
      [discreteDomains]="1"
      >

    </ngx-frappe-charts-heatmap>
```

### Valid inputs

Valid inputs foe drawing Heatmap charts are as follows.

<table>
  <tr>
    <th>Input</th>
    <th>Type</th>
    <th>Valid Input values</th>
  </tr>
  <tr>
    <td>data</td>
    <td>HeatmapDataModel</td>
    <td> - </td>
  </tr>
    <tr>
    <td>title</td>
    <td>string</td>
    <td> - </td>
  </tr>
      <tr>
    <td>colors</td>
    <td>string[]</td>
    <td> - </td>
  </tr>
      <tr>
    <td>countLabel</td>
    <td>string</td>
    <td> - </td>
  </tr>
      <tr>
    <td>discreteDomains</td>
    <td>number</td>
    <td> 1 or 0 </td>
  </tr>
</table>

### Custom models

where `HeatmapDataModel` is interfaces as follows.

**`heatmap-data.model.ts`**

```ts
export interface HeatmapDataModel {
  start: Date; // e.g. new Date('2018-12-31')
  end: Date;
  dataPoints: any; //  { '1524064033': 8, /* ... */},
}
```

Don't forget to check out the [Frappe charts docs](https://frappe.io/charts/docs).

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- **Kedar Paritkar** - Software Developer - Tieto India.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Thanks to Frappe Charts for creating this awesome library.
