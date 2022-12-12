import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eurtobtc'
})
export class EurtobtcPipe implements PipeTransform {

  transform(value: number, crypto : string): string {
    if(crypto == "eth") return value / 1170 + ' ETH';
    if(crypto == "btc") return value / 17130.09 + ' BTC';
    return "crypto non prise en comptes"
  }

}
