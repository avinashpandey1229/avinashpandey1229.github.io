import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appStockDirectionImage]'
})
export class StockDirectionImageDirective {
  @Input()
  changePercent!: number;

  @HostBinding('src')
   imageSource!:string;

  constructor() { }

  ngOnChanges() {
    const imageType = this.changePercent > 0 ? "up_arrow": "down_arrow";
    this.imageSource = 'assets/' + imageType + '.png';
  }
}
