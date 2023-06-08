const { basicOp, ERROR_MESSAGES } = require('../calc_0');

describe('Testing The Calc', function () {
  // test('testing typeof', function () {
  //   expect(basicOp('*', '', 5)).toBe('value1(2) should be a number');
  //   expect(basicOp('*', [], 5)).toBe('value1(2) should be a number');
  //   expect(basicOp('*', {}, 5)).toBe('value1(2) should be a number');
  //   expect(basicOp('*', undefined, 5)).toBe('value1(2) should be a number');
  //   expect(basicOp('*', null, 5)).toBe('value1(2) should be a number');
  // });
  test('testing typeof', function () {
    expect(basicOp('*', '', 5)).toBe(
      ERROR_MESSAGES.ARGUMENT_SHOULD_BE_A_NUMBER
    );
    expect(basicOp('*', [], 5)).toBe(
      ERROR_MESSAGES.ARGUMENT_SHOULD_BE_A_NUMBER
    );
    expect(basicOp('*', {}, 5)).toBe(
      ERROR_MESSAGES.ARGUMENT_SHOULD_BE_A_NUMBER
    );
    expect(basicOp('*', undefined, 5)).toBe(
      ERROR_MESSAGES.ARGUMENT_SHOULD_BE_A_NUMBER
    );
    expect(basicOp('*', null, 5)).toBe(
      ERROR_MESSAGES.ARGUMENT_SHOULD_BE_A_NUMBER
    );
  });
  test('testing for NaN', function () {
    expect(basicOp('*', NaN, 5)).toBe(
      ERROR_MESSAGES.ARGUMENT_SHOULD_NOT_BE_A_NAN
    );
  });
  test('testing for Number.MAX_VALUE', function () {
    expect(basicOp('*', Number.MAX_VALUE, 5)).toBe(
      ERROR_MESSAGES.VALUE_IS_TOO_LARGE
    );
  });
  test('testing addition of numbers', function () {
    const testCase = [
      { arguments: ['+', 4, 5], res: 9 },
      { arguments: ['+', 0, 5], res: 5 },
      { arguments: ['+', 0, 0], res: 0 },
      { arguments: ['+', -5, -100], res: -105 },
      { arguments: ['+', -5, 100], res: 95 },
      { arguments: ['+', 0.1, 5], res: 5.1 },
    ];
    testCase.forEach((item) =>
      expect(basicOp(...item.arguments)).toBe(item.res)
    );
  });
  test('testing number multiplication', function () {
    const testCase = [
      { arguments: ['*', 4, 5], res: 20 },
      { arguments: ['*', 0, 5], res: 0 },
      { arguments: ['*', 0, 0], res: 0 },
      { arguments: ['*', -5, -100], res: 500 },
      { arguments: ['*', -5, 100], res: -500 },
      { arguments: ['*', 0.1, 5], res: 0.5 },
    ];
    testCase.forEach((item) =>
      expect(basicOp(...item.arguments)).toBe(item.res)
    );
  });
  test('testing number subtraction', function () {
    const testCase = [
      { arguments: ['-', 4, 5], res: -1 },
      { arguments: ['-', 0, 5], res: -5 },
      { arguments: ['-', 0, 0], res: 0 },
      { arguments: ['-', -5, -100], res: 95 },
      { arguments: ['-', -5, 100], res: -105 },
      { arguments: ['-', 0.1, 5], res: -4.9 },
    ];
    testCase.forEach((item) =>
      expect(basicOp(...item.arguments)).toBe(item.res)
    );
  });
  test('testing division of numbers', function () {
    const testCase = [
      { arguments: ['/', 20, 5], res: 4 },
      { arguments: ['/', 0, 5], res: 0 },
      { arguments: ['/', 0, 0], res: NaN },
      { arguments: ['/', -5, -100], res: 0.05 },
      { arguments: ['/', -5, 100], res: -0.05 },
      { arguments: ['/', 0.1, 5], res: 0.02 },
      { arguments: ['/', 5, 0], res: Infinity },
    ];
    testCase.forEach((item) =>
      expect(basicOp(...item.arguments)).toBe(item.res)
    );
  });
});

// 1) value1 и value2 должны быть числами
// 2) value1 и value2 не должны быть Number.MAX_VALUE
// 3) результат умножения value1 и value2 не должен быть больше Number.MAX_VALUE
// 4) value1 и value2 не должны быть NaN
// 5) умножене на 0
// 6) умножение двух отрицательных чисел
// 7) умножение отрицательного и положительного числа
// 8) умножение дробных чисел???
