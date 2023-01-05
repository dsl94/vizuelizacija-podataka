import { Component } from '@angular/core';
import {EChartsOption} from "echarts";

@Component({
  selector: 'app-gauge2',
  templateUrl: './gauge2.component.html',
  styleUrls: ['./gauge2.component.scss']
})
export class Gauge2Component {
  options: EChartsOption =  {
    series: [
      {
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: 30,
            color: [
              [0.3, '#67e0e3'],
              [0.7, '#37a2da'],
              [1, '#fd666d']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: 'inherit'
          }
        },
        axisTick: {
          distance: -30,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        splitLine: {
          distance: -30,
          length: 30,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisLabel: {
          color: 'inherit',
          distance: 40,
          fontSize: 20
        },
        detail: {
          valueAnimation: true,
          formatter: '{value} km/h',
          color: 'inherit'
        },
        data: [
          {
            value: 70
          }
        ]
      }
    ]
  };
}
