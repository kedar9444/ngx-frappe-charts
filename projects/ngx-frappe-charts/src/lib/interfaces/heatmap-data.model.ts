export interface HeatmapDataModel {
  start: Date; // e.g. new Date('2018-12-31')
  end: Date;
  dataPoints: any; //  { '1524064033': 8, /* ... */},
}
