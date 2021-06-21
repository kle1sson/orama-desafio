import { CalcHeightPipe } from './calc-height.pipe';

describe('CalcHeightPipe', () => {
  it('should calculate height correctly', () => {
    const pipe = new CalcHeightPipe();

    const level = 2;

    const height = pipe.transform(level);
    expect(height).toBe('20px');
  });
});
