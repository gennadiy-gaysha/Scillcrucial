const { firstNonConsecutive } = require('../firstNonConsecutive');

describe('TestingfirstNonConsecutive function', function () {
  test('all positive with non consecutive', function () {
    const testCases = [
      {
        arr: [17, 19],
        element: 19,
      },
      {
        arr: [4, 6, 7, 8, 9, 10],
        element: 6,
      },
      {
        arr: [25, 26, 27, 29, 30, 31],
        element: 29,
      },
      {
        arr: [105, 106, 107, 108, 109, 111],
        element: 111,
      },
    ];
    testCases.forEach((item) => {
      expect(firstNonConsecutive(item.arr)).toBe(item.element);
    });
  });
  test('all negative with non consecutive', function () {
    const testCases = [
      {
        arr: [-17, -19],
        element: -19,
      },
      {
        arr: [-11, -9, -8, -7, -6, -5],
        element: -9,
      },
      {
        arr: [-10, -9, -8, -5, -3, -2],
        element: -5,
      },
      {
        arr: [-111, -110, -109, -108, -107, -105],
        element: -105,
      },
    ];
    testCases.forEach((item) => {
      expect(firstNonConsecutive(item.arr)).toBe(item.element);
    });
  });
  test('array includes 0', function () {
    const testCases = [
      {
        arr: [0, 19],
        element: 19,
      },
      {
        arr: [-17, 0],
        element: 0,
      },
      {
        arr: [-6, -5, -4, -3, -2, 0],
        element: 0,
      },
      {
        arr: [0, 2, 3, 4, 5, 6],
        element: 2,
      },
      {
        arr: [-3, -2, -1, 0, 1, 2, 4, 5, 6],
        element: 4,
      },
    ];
    testCases.forEach((item) => {
      expect(firstNonConsecutive(item.arr)).toBe(item.element);
    });
  });
  test('all consecutive', function () {
    const testCases = [
      {
        arr: [0, 1],
        element: null,
      },
      {
        arr: [-1, 0],
        element: null,
      },
      {
        arr: [-6, -5, -4, -3, -2, -1],
        element: null,
      },
      {
        arr: [1, 2, 3, 4, 5, 6],
        element: null,
      },
      {
        arr: [-3, -2, -1, 0, 1, 2, 3, 4, 5],
        element: null,
      },
    ];
    testCases.forEach((item) => {
      expect(firstNonConsecutive(item.arr)).toBe(item.element);
    });
  });
});
