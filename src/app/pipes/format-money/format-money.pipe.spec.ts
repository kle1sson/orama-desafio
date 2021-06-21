import { FormatMoneyPipe } from './format-money.pipe';

describe('FormatMoneyPipe', () => {
  it('should format string correctly', () => {
    const pipe = new FormatMoneyPipe();
    const value = '5000.00';

    const formatedString = pipe.transform(value);

    expect(formatedString).toBe('5.000,00');
    expect(pipe).toBeTruthy();
  });
});
