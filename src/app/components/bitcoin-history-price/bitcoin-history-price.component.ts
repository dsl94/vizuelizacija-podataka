import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EChartsOption} from "echarts";

@Component({
  selector: 'app-bitcoin-history-price',
  templateUrl: './bitcoin-history-price.component.html',
  styleUrls: ['./bitcoin-history-price.component.scss']
})
export class BitcoinHistoryPriceComponent {
  options: EChartsOption = {
    series : [{
      layout: 'none'
    }]
  };
  private _jsonURL = 'assets/bitcoinPricePerDay.json';
  constructor(private http: HttpClient) {
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  ngOnInit(): void {

    var xAxisData: any = [];
    var data1: any = [];

    this.getJSON().subscribe(data => {
      data.forEach(function (el: any) {
        if (el.col1 !== null) {
          xAxisData.push(el.col1);
          data1.push(el.G)
        }
      });
      xAxisData = xAxisData.reverse();
      data1 = data1.reverse();
    });

    this.options = {
      legend: {
        data: ['bar'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'Bitcoin price',
          type: 'bar',
          data: data1,
        },
      ],
      animationEasing: 'elasticOut',
    };
  }
}
