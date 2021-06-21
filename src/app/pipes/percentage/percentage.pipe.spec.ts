import { PercentagePipe } from './percentage.pipe';

describe('PercentagePipe', () => {
  it('should calculate Percentage correctly', () => {
    const pipe = new PercentagePipe();

    const value = 0.7;

    const percentage = pipe.transform(value);

    expect(percentage).toBe('70.00');
    expect(pipe).toBeTruthy();
  });
});
