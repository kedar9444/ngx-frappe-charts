import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FrappeChartsHeatmapComponent } from './frappe-charts-heatmap.component';

describe('FrappeChartsHeatmapComponent', () => {
  let component: FrappeChartsHeatmapComponent;
  let fixture: ComponentFixture<FrappeChartsHeatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrappeChartsHeatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrappeChartsHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
