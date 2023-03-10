import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import {RouterModule, Routes} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { BasicComponent } from './pages/basic/basic.component';
import {NgxEchartsModule} from "ngx-echarts";
import {HttpClientModule} from "@angular/common/http";
import { BitcoinHistoryPriceComponent } from './components/bitcoin-history-price/bitcoin-history-price.component';
import { TopCoinsByPriceComponent } from './components/top-coins-by-price/top-coins-by-price.component';
import { DetailPriceComponent } from './components/detail-price/detail-price.component';
import { RouteGraphComponent } from './components/route-graph/route-graph.component';
import { AdvancedComponent } from './pages/advanced/advanced.component';
import {FormsModule} from "@angular/forms";
import { TreeComponent } from './components/tree/tree.component';
import { GaugeComponent } from './components/gauge/gauge.component';
import { Gauge2Component } from './components/gauge2/gauge2.component';
import { ComplexComponent } from './pages/complex/complex.component';
import { RadarComponent } from './components/radar/radar.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/basic', pathMatch: 'full' },
  { path: 'main', component: MainComponent, children: [
      {
        path: 'basic', // child route path
        component: BasicComponent, // child route component that the router renders
      },
      {
        path: 'advanced', // child route path
        component: AdvancedComponent, // child route component that the router renders
      },
      {
        path: 'complex', // child route path
        component: ComplexComponent, // child route component that the router renders
      },
    ] },
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BasicComponent,
    BitcoinHistoryPriceComponent,
    TopCoinsByPriceComponent,
    DetailPriceComponent,
    RouteGraphComponent,
    AdvancedComponent,
    TreeComponent,
    GaugeComponent,
    Gauge2Component,
    ComplexComponent,
    RadarComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule, NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
