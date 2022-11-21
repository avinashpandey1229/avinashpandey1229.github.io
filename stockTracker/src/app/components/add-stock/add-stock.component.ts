import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent {
  stockInput!: string;

  @Output()
  public addStockId: EventEmitter<string> = new EventEmitter()

  constructor() { }

  addStock() {
    this.addStockId.emit(this.stockInput)
  }

}
