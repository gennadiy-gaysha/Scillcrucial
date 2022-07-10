const { sumArray } = require('../sumArray');

describe('testing sumArray function', function () {
  test('testing array with 2 equal values', function () {
    const testCases = [
      {
        array: [5, 5],
        result: 0,
      },
      {
        array: [-77, -77],
        result: 0,
      },
      {
        array: [0, 0],
        result: 0,
      },
    ];
    testCases.forEach((item) => {
      expect(sumArray(item.array)).toBe(item.result);
    });
  });
  test('testing array with 2 different values', function () {
    const testCases = [
      {
        array: [5, 10],
        result: 0,
      },
      {
        array: [-177, -277],
        result: 0,
      },
      {
        array: [-45, 109],
        result: 0,
      },
      {
        array: [-1230, 0],
        result: 0,
      },
      {
        array: [0, 101],
        result: 0,
      },
    ];
    testCases.forEach((item) => {
      expect(sumArray(item.array)).toBe(item.result);
    });
  });
  test('testing array with 3 values', function () {
    const testCases = [
      {
        array: [10, 10, 10],
        result: 10,
      },
      {
        array: [5, -177, -177],
        result: -177,
      },
      {
        array: [-45, 109, 1],
        result: 1,
      },
    ];
    testCases.forEach((item) => {
      expect(sumArray(item.array)).toBe(item.result);
    });
  });
  test('testing array with more than 3 values and recurring marginal values', function () {
    const testCases = [
      {
        array: [-12, -4, -4, -13, -13, -5],
        result: -34,
      },
      {
        array: [5, 177, 177, 45, 5, 8],
        result: 235,
      },
      {
        array: [-12, -12, 4, 0, 13, 13, 5],
        result: 10,
      },
    ];
    testCases.forEach((item) => {
      expect(sumArray(item.array)).toBe(item.result);
    });
  });
  test('testing array with more than 3 values and non-recurring marginal values', function () {
    const testCases = [
      {
        array: [-12, -4, -5, -13, -16, -5],
        result: -35,
      },
      {
        array: [5, 17, 17, 45, 6, 8],
        result: 48,
      },
      {
        array: [-12, -11, 4, 0, 14, 5, 5],
        result: 3,
      },
    ];
    testCases.forEach((item) => {
      expect(sumArray(item.array)).toBe(item.result);
    });
  });
  test('testing array with one or empty value', function () {
    const testCases = [
      {
        array: [-12],
        result: 0,
      },
      {
        array: [],
        result: 0,
      },
      {
        array: undefined,
        result: 0,
      },
      {
        array: null,
        result: 0,
      },
    ];
    testCases.forEach((item) => {
      expect(sumArray(item.array)).toBe(item.result);
    });
  });
});

// 3. серия тестов с пустышками:
// - тест с пустым массивом [];
// - тест с массивом из 1 элемента;
// - тест с undefined;
// - тест с null;
