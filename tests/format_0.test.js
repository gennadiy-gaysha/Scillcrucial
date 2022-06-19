const { formatMoney } = require('../format_0');

describe('Testing format to $', function () {
  test('testing typeof', function () {
    expect(formatMoney('')).toBe('amount should be a number');
    expect(formatMoney([])).toBe('amount should be a number');
    expect(formatMoney({})).toBe('amount should be a number');
    expect(formatMoney(null)).toBe('amount should be a number');
    expect(formatMoney(undefined)).toBe('amount should be a number');
    expect(formatMoney(NaN)).toBe('amount should not be equal to NaN');
  });
  test('testing MAX_VALUE', function () {
    expect(formatMoney(Number.MAX_VALUE)).toBe('amount is too large');
    expect(formatMoney(-Number.MAX_VALUE)).toBe('amount is too small');
  });
  test('testing Float', function () {
    expect(formatMoney(-5.6)).toBe('-$5.60');
    expect(formatMoney(-5.67)).toBe('-$5.67');
    expect(formatMoney(-5.678)).toBe('-$5.68');
    expect(formatMoney(-5.6789101112131415)).toBe('-$5.68');
    expect(formatMoney(5.6)).toBe('$5.60');
    expect(formatMoney(5.67)).toBe('$5.67');
    expect(formatMoney(5.678)).toBe('$5.68');
    expect(formatMoney(5.6789101112131415)).toBe('$5.68');
  });
  test('testing 0', function () {
    expect(formatMoney(0)).toBe('$0.00');
  });
  test('testing Integer', function () {
    expect(formatMoney(-123)).toBe('-$123.00');
    expect(formatMoney(123)).toBe('$123.00');
  });
});
