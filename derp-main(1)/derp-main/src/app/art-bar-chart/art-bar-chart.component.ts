import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { getAquisitionsByYear } from '../../assets/derp-api.js'

@Component({
  selector: 'app-art-bar-chart',
  templateUrl: './art-bar-chart.component.html',
  styleUrls: ['./art-bar-chart.component.css']
})
export class ArtBarChartComponent implements OnInit {
  constructor() { }

  data: any;
  chart: any;

  public ngOnInit(): void {
    // fetch data
    getAquisitionsByYear().then((data: any) => {
      this.data = data;
      // create chart with data
      this.createChart();
    });
  }

  private createChart(): void {
    this.chart = new Chart("MyArtBarChart", {
      type: 'bar', //this denotes tha type of chart

      data: {
        labels: this.data.map((row: any) => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: this.data.map((row: any) => row.count)
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
}
