import { FormatDatePipe } from './format-date.pipe';

describe('FormatDatePipe', () => {
  it('should format date correctly', () => {
    const pipe = new FormatDatePipe();
    const date = '2021-06-18';

    const formatedDate = pipe.transform(date);

    expect(formatedDate).toBe('18/06/2021');
    expect(pipe).toBeTruthy();
  });
});
