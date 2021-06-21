import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcHeight',
})
export class CalcHeightPipe implements PipeTransform {
  transform(level: number, baseHeight: number = 16): string {
    const height = baseHeight + level * 2;

    return `${height}px`;
  }
}
