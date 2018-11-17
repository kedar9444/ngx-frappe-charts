import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FrappeChartsPercentageComponent } from './frappe-charts-percentage.component';

describe('FrappeChartsPercentageComponent', () => {
  let component: FrappeChartsPercentageComponent;
  let fixture: ComponentFixture<FrappeChartsPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrappeChartsPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrappeChartsPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
