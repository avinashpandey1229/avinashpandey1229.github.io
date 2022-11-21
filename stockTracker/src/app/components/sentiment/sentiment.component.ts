import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { start } from 'repl';
import { InsiderSentiment } from 'src/app/models/sentiment-data';
import { StockDataService } from 'src/app/services/stock-data.service';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {
  public symbol: string | null;
  public stockName: string;
  public sentiments!: InsiderSentiment;
  constructor(private route: ActivatedRoute, private stockDataService: StockDataService) {
    this.symbol = '';
    this.stockName = '';
  }

  ngOnInit(): void {
    this.symbol = this.route.snapshot.paramMap.get('symbol');
    if (this.symbol !== null) {
      this.stockDataService.searchSymbolName(this.symbol).subscribe(symbolData => {
        const symbol = symbolData.result.filter(x => x.symbol === this.symbol);
        if (symbol.length > 0) {
          this.stockName = symbol[0].description
        }
      })
      let date = new Date();
      const endDate = this.formatDate(date);
      date.setMonth(date.getMonth() - 2);
      const startDate = this.formatDate(date);
      if (this.symbol !== null) {
        this.stockDataService.getInsiderSentiment(this.symbol, startDate, endDate).subscribe(sentiment => {         
          this.sentiments = sentiment
        })
      }
    }

  }

  formatDate(date: Date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

}
