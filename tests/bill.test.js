const { splitTheBill } = require('../bill');

describe('Testing splitTheBill function', function () {
  test('number of members', function () {
    expect(splitTheBill({})).toBe(
      'there should be at least one member to split the bill'
    );
  });
  test('testing typeof of key value', function () {
    expect(splitTheBill({ A: '' })).toBe(
      'all the key values should be numbers'
    );
    expect(splitTheBill({ A: [] })).toBe(
      'all the key values should be numbers'
    );
    expect(splitTheBill({ A: {} })).toBe(
      'all the key values should be numbers'
    );
    expect(splitTheBill({ A: undefined })).toBe(
      'all the key values should be numbers'
    );
    expect(splitTheBill({ A: null })).toBe(
      'all the key values should be numbers'
    );
  });
  test('testing for NaN', function () {
    expect(splitTheBill({ A: NaN })).toBe(
      'key value should be a positive number or 0, and not be equal to NaN'
    );
  });
  test('testing when key values are positive numbers or 0', function () {
    expect(splitTheBill({ A: 0, B: 10 })).toStrictEqual({ A: -5, B: 5 });
    expect(splitTheBill({ A: 1.1, B: 2.2 })).toStrictEqual({
      A: -0.55,
      B: 0.55,
    });
    expect(splitTheBill({ A: 1.23, B: 2.34 })).toStrictEqual({
      A: -0.55,
      B: 0.55,
    });
    expect(splitTheBill({ A: 1.2345, B: 2.3456 })).toStrictEqual({
      A: -0.56,
      B: 0.56,
    });
    expect(splitTheBill({ A: 50, B: 100 })).toStrictEqual({ A: -25, B: 25 });
  });
  test('testing the key value for negative meaning', function () {
    expect(splitTheBill({ A: -5 })).toBe(
      'key value should be positive number or 0, but not negative number'
    );
  });
});
