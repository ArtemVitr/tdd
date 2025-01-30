const factorial = require('./factorial');
const getFactorialFromExternalService = require('./externalService');

jest.mock('./externalService', () => {
  return jest.fn((n) => {
    return new Promise((resolve) => {
      resolve(n > 0 ? n * (n - 1) : 1);
    });
  });
});

describe('factorial', () => {
  it('should return 1 for 0', async () => {
    const result = await factorial(0);
    expect(result).toBe(1);
  });

  it('should return 1 for 1', async () => {
    const result = await factorial(1);
    expect(result).toBe(1);
  });

  it('should return 2 for 2', async () => {
    const result = await factorial(2);
    expect(result).toBe(2);
  });

  it('should return 6 for 3', async () => {
    const result = await factorial(3);
    expect(result).toBe(6);
  });

  it('should call external service for n > 0', async () => {
    await factorial(3);
    expect(getFactorialFromExternalService).toHaveBeenCalledWith(2);
  });
});