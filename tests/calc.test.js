const { TypeError, basicOp } = require('../calc');

describe('Testing The Calc', function () {
  test('testing typeof', function () {
    expect(basicOp('*', '', 5)).toThrow(TypeError);
    expect(basicOp('*', [], 5)).toThrow(TypeError);
    expect(basicOp('*', {}, 5)).toThrow(TypeError);
    expect(basicOp('*', undefined, 5)).toThrow(TypeError);
    expect(basicOp('*', null, 5)).toThrow(TypeError);
  });
  // test('testing for NaN', function () {
  //   expect(basicOp('*', NaN, 5)).toBe('value1(2) should not be equal to NaN');
  // });
  // test('testing for Number.MAX_VALUE', function () {
  //   expect(basicOp('*', Number.MAX_VALUE, 5)).toBe('value1(2) is too large');
  // });
  // test('testing number multiplication', function () {
  //   expect(basicOp('*', 0, 5)).toBe(0);
  //   expect(basicOp('*', 0, 0)).toBe(0);
  //   expect(basicOp('*', -5, -100)).toBe(500);
  //   expect(basicOp('*', -5, 100)).toBe(-500);
  //   expect(basicOp('*', 0.1, 5)).toBe(0.5);
  // });
});

// 1) value1 и value2 должны быть числами
// 2) value1 и value2 не должны быть Number.MAX_VALUE
// 3) результат умножения value1 и value2 не должен быть больше Number.MAX_VALUE
// 4) value1 и value2 не должны быть NaN
// 5) умножене на 0
// 6) умножение двух отрицательных чисел
// 7) умножение отрицательного и положительного числа
// 8) умножение дробных чисел???
