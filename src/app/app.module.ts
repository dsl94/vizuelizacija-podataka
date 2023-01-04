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

const routes: Routes = [
  { path: '', redirectTo: 'main/basic', pathMatch: 'full' },
  { path: 'main', component: MainComponent, children: [
      {
        path: 'basic', // child route path
        component: BasicComponent, // child route component that the router renders
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
    DetailPriceComponent
  ],
  imports: [
    BrowserModule,
    NgbModule, NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
