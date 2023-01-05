import { Component } from '@angular/core';
import {EChartsOption} from "echarts";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-route-graph',
  templateUrl: './route-graph.component.html',
  styleUrls: ['./route-graph.component.scss']
})
export class RouteGraphComponent {
  options: EChartsOption = {
    series : [{
      layout: 'none'
    }]
  };

  private _jsonURL = 'assets/routes.json';
  constructor(private http: HttpClient) {
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  ngOnInit(): void {

    var graph: any = null;

    this.getJSON().subscribe(res => {
      graph = res;
      // @ts-ignore
      this.options = {
        tooltip: {},
        legend: [
          {
            data: graph.categories.map(function (a: { name: string }) {
              return a.name;
            })
          }
        ],
        series: [
          {
            name: 'Les Miserables',
            type: 'graph',
            layout: "circular",
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            draggable: true,
            roam: true,
            label: {
              show: true,
              position: 'right',
              formatter: '{b}'
            },
            labelLayout: {
              hideOverlap: true
            },
            scaleLimit: {
              min: 0.4,
              max: 2
            },
            lineStyle: {
              color: 'source',
              curveness: 0.3
            }
          }
        ]
      };
    });
  }
}
