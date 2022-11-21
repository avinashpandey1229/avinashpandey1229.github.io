import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StockDetails } from 'src/app/models/stock-details';
import { StockDataService } from 'src/app/services/stock-data.service';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {
 @Input()
 public stockId:string='';

 @Output()
 public deleteStockId:EventEmitter<string> = new EventEmitter()
 public stockName:string='';
 public stockDetails!: StockDetails;

  constructor(private stockDataService:StockDataService) { }

  ngOnInit(): void {
    this.stockDataService.searchSymbolName(this.stockId).subscribe(symbolData=>{
      const symbol =symbolData.result.filter(x=> x.symbol === this.stockId);
      if(symbol.length>0){
       this.stockName = symbol[0].description
      }
    })
    const quoteData = this.stockDataService.getQuoteData(this.stockId)
    quoteData.subscribe(data=>{
      this.stockDetails=data;
    })
  }

  deleteStock(stockId:string){
   this.deleteStockId.emit(stockId);
  }

}
