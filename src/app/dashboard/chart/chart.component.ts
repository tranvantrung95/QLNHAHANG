// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
// import { BaseChartDirective } from 'ng2-charts';

// @Component({
//   selector: 'app-chart',
//   standalone: true,
//   imports: [BaseChartDirective, CommonModule],  // Sử dụng BaseChartDirective
//   templateUrl: './chart.component.html',
//   styleUrls: ['./chart.component.css']
// })
// export class ChartComponent {

//   public lineChartType: ChartType = 'line';

//   public lineChartData: ChartData<'line'> = {
//     datasets: [
//       {
//         data: [20000, 22000, 24000, 23000, 25000, 26000, 27000],
//         label: 'This period',
//         borderColor: 'rgba(128, 90, 213, 1)',
//         backgroundColor: 'rgba(128, 90, 213, 0.2)',
//         fill: true,
//       },
//       {
//         data: [15000, 16000, 17000, 16500, 18000, 18500, 19000],
//         label: 'Last period',
//         borderColor: 'rgba(234, 179, 8, 1)',
//         backgroundColor: 'rgba(234, 179, 8, 0.2)',
//         fill: true,
//       }
//     ],
//     labels: ['Aug 01', 'Aug 05', 'Aug 10', 'Aug 15', 'Aug 20', 'Aug 25', 'Aug 31']
//   };
//   public lineChartOptions: ChartConfiguration['options'] = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         grid: {
//           display: false
//         }
//       },
//       y: {
//         beginAtZero: true,
//         grid: {
//           color: 'rgba(200, 200, 200, 0.2)'
//         },
//         ticks: {
//           callback: function(value) {
//             return '$' + Number(value) / 1000 + 'K';
//           }
//         }
//       }
//     }
//   };

// }
import { Component, ViewChild } from "@angular/core";
import { NgApexchartsModule } from "ng-apexcharts";

import {
  ChartComponent as AngularChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

// @Component({
//   selector: "app-root",
//   templateUrl: "./app.component.html",
//   styleUrls: ["./app.component.css"]
// })

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {
  @ViewChild("chart") chart!: AngularChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "This period",
          data: [20000, 22000, 24000, 23000, 25000, 26000, 27000],
        },
        {
          
                    data: [15000, 16000, 17000, 16500, 18000, 18500, 19000],
                    name: 'Last period',
       
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: ['Aug 01', 'Aug 05', 'Aug 10', 'Aug 15', 'Aug 20', 'Aug 25', 'Aug 31']
      }
    };
  }
}

