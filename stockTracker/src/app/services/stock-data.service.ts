import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { StockDetails } from '../models/stock-details';
import { InsiderSentiment } from '../models/sentiment-data';
import { SymbolLookup } from '../models/symbolLookup';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  private url = "https://finnhub.io/api/v1/";
  private token = "&token=bu4f8kn48v6uehqi3cqg";
  constructor(private http: HttpClient) { }

  searchSymbolName(symbol: string):Observable<SymbolLookup> {
    return this.http.get<SymbolLookup>(this.url + "search?q=" + symbol + this.token);
  }

  getQuoteData(symbol: string):Observable<StockDetails> {
    return this.http.get<StockDetails>(
      this.url + "quote?symbol=" + symbol + this.token
    );
  }

  getInsiderSentiment(symbol: string, startDate: string, endDate: string):Observable<InsiderSentiment> {
    return this.http.get<InsiderSentiment>(
      this.url + "stock/insider-sentiment?symbol=" + symbol + "&from=" + startDate + "&to=" + endDate + this.token
    );
  }
}
