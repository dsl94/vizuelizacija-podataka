import { Component } from '@angular/core';
import {ThemeOption} from "ngx-echarts";
import {EChartsOption} from "echarts";

@Component({
  selector: 'app-top-coins-by-price',
  templateUrl: './top-coins-by-price.component.html',
  styleUrls: ['./top-coins-by-price.component.scss']
})
export class TopCoinsByPriceComponent {
  theme: string | ThemeOption = '';
  options: EChartsOption = {
    title: {
      left: '50%',
      text: 'Crypto coins by cap',
      subtext: 'In billions of $',
      textAlign: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      align: 'auto',
      bottom: 10,
      data: ['Bitcoin', 'Ethereum', 'Tether', 'USD Coin', 'BNB', 'XRP', 'Binance USD', 'Dogecoin']
    },
    calculable: true,
    series: [
      {
        name: 'area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 318, name: 'Bitcoin' },
          { value: 146, name: 'Ethereum' },
          { value: 66, name: 'Tether' },
          { value: 44, name: 'USD Coin' },
          { value: 39, name: 'BNB' },
          { value: 17, name: 'XRP' },
          { value: 17, name: 'Binance USD' },
          { value: 9, name: 'Dogecoin' }
        ]
      }
    ]
  };
}
