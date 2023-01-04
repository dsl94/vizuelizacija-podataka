import { Component } from '@angular/core';
import {EChartsOption} from "echarts";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-detail-price',
  templateUrl: './detail-price.component.html',
  styleUrls: ['./detail-price.component.scss']
})
export class DetailPriceComponent {
  options: EChartsOption = {

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
    var counter = 0;

    this.getJSON().subscribe(data => {
      data.forEach(function (el: any) {
        if (counter < 10) {
          if (el.col1 !== null) {
            xAxisData.push(el.col1);
            data1.push([el.G, el.D, el.F, el.E])
          }
          counter++;
        }
      });
      xAxisData = xAxisData.reverse();
      data1 = data1.reverse();
    });

    this.options = {
      xAxis: {
        data: xAxisData
      },
      yAxis: {
        min: 16400
      },
      series: [
        {
          type: 'candlestick',
          data: data1
        }
      ]
    };
  }
}
