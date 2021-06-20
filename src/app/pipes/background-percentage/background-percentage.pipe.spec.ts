import { BackgroundPercentagePipe } from './background-percentage.pipe';

describe('BackgroundPercentagePipe', () => {
  it('should calculate percentage correctly', () => {
    const pipe = new BackgroundPercentagePipe();

    const rangeValue = 9;
    const max = 18;

    const backgroundPercentage = pipe.transform(rangeValue, max);
    expect(backgroundPercentage).toBe('50%');
  });
});
