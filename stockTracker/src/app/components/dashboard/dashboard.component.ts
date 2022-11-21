import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StockDetails } from 'src/app/models/stock-details';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  stocks: string[];
  localStocks: string | null;

  constructor() {
    this.localStocks = localStorage.getItem("stocks");
    if (this.localStocks === null) {
      this.stocks = [];
    }
    else {
      this.stocks = JSON.parse(this.localStocks)
    }
  }

  deleteStockId(stockId: string) {
    const index = this.stocks.indexOf(stockId);
    this.stocks.splice(index, 1);
    localStorage.setItem("stocks", JSON.stringify(this.stocks))
  }

  addStockId(stockId: string) {
    this.stocks.push(stockId);
    localStorage.setItem("stocks", JSON.stringify(this.stocks))
  }
}
