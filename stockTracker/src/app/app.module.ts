import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SentimentComponent } from './components/sentiment/sentiment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { FormsModule } from '@angular/forms';
import { StockDataService } from './services/stock-data.service';
import { HttpClientModule } from '@angular/common/http';
import { MonthNamePipe } from './pipes/month-name.pipe';
import { StockDirectionImageDirective } from './directives/stock-direction-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    SentimentComponent,
    DashboardComponent,
    StockCardComponent,
    AddStockComponent,
    MonthNamePipe,
    StockDirectionImageDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [StockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
