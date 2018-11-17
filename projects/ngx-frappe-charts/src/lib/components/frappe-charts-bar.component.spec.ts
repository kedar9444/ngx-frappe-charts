import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FrappeChartsBarComponent } from './frappe-charts-bar.component';

describe('FrappeChartsBarComponent', () => {
  let component: FrappeChartsBarComponent;
  let fixture: ComponentFixture<FrappeChartsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FrappeChartsBarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrappeChartsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
