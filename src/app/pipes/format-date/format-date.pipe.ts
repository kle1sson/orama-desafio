import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(date: string): string {
    const dateToformat = new Date(date);
    const formattedDate = dateToformat.toLocaleDateString('pt-BR', {
      timeZone: 'UTC',
    });

    return formattedDate;
  }
}
