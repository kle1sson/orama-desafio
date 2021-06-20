import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backgroundPercentage',
})
export class BackgroundPercentagePipe implements PipeTransform {
  transform(rangeValue: number, max: number): string {
    return `${(rangeValue / max) * 100}%`;
  }
}
