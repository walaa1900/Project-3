import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { DerpRangeToTotal, DerpService } from '../derp.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private derpService: DerpService) { }

  ngOnInit(): void {
    this.createChartV2();
  }
  public chart: any;

  createChart(){
  
    this.chart = new Chart("MyBarChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

  createChartV2() {
    const derpData: DerpRangeToTotal[] = this.derpService.getDerpData();
    this.chart = new Chart("MyBarChart2", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['<10', '10-20', '20-30', '30-40','40>'], 
	       datasets: [
          {
            label: "Charges Total",
            data: [
              derpData[0].totalCharges, 
              derpData[1].totalCharges,
              derpData[2].totalCharges,
              derpData[3].totalCharges,
              derpData[4].totalCharges,
            ],
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

}