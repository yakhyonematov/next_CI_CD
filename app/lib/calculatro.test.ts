import 

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should multiply a positive and a negative number', () => {
    expect(multiply(2, -3)).toBe(-6);
  });
});