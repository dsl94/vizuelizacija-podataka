import { Component } from '@angular/core';
import {EChartsOption} from "echarts";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  options: EChartsOption = {
    series : [{

    }]
  };

  private _jsonURL = 'assets/file-structure.json';
  constructor(private http: HttpClient) {
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  ngOnInit(): void {

    var tree: any = null;

    this.getJSON().subscribe(res => {
      tree = res;
      // @ts-ignore
      this.options = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [
          {
            type: 'tree',

            data: [tree],

            top: '1%',
            left: '7%',
            bottom: '1%',
            right: '20%',

            symbolSize: 7,

            label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              fontSize: 9
            },

            leaves: {
              label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              }
            },

            emphasis: {
              focus: 'descendant'
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      }
    });
  }
}
