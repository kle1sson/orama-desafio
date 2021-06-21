import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMoney',
})
export class FormatMoneyPipe implements PipeTransform {
  transform(value: string): string {
    const valueInt = parseFloat(value);

    return valueInt.toLocaleString('pt-br', { minimumFractionDigits: 2 });
  }
}
