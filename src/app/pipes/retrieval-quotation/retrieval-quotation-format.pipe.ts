import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'retrievalQuotationFormat',
})
export class RetrievalQuotationFormatPipe implements PipeTransform {
  transform(retrievalQuotationDays: number): string {
    return `D + ${retrievalQuotationDays}`;
  }
}
