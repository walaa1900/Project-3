import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtBarChartComponent } from './art-bar-chart.component';

describe('ArtBarChartComponent', () => {
  let component: ArtBarChartComponent;
  let fixture: ComponentFixture<ArtBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtBarChartComponent]
    });
    fixture = TestBed.createComponent(ArtBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
