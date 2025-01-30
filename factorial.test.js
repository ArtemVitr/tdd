const factorial = require('./factorial');

describe('factorial', () => {
  it('should return 1 for 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should return 1 for 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should return 2 for 2', () => {
    expect(factorial(2)).toBe(2);
  });

  it('should return 6 for 3', () => {
    expect(factorial(3)).toBe(6);
  });
});