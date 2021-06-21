import { RetrievalQuotationFormatPipe } from './retrieval-quotation-format.pipe';

describe('RetrievalQuotationFormatPipe', () => {
  it('should calculate retrieval Quotation correctly', () => {
    const pipe = new RetrievalQuotationFormatPipe();

    const retrievalQuotationDays = 15;

    const retrievalQuotationFormated = pipe.transform(retrievalQuotationDays);

    expect(retrievalQuotationFormated).toBe('D + 15');
    expect(pipe).toBeTruthy();
  });
});
