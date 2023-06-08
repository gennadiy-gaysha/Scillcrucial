// exports.basicOp = function basicOp(operation, value1, value2) {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number')
//     return 'value1(2) should be a number';
//   if (isNaN(value1) || isNaN(value2))
//     return 'value1(2) should not be equal to NaN';
//   if (value1 >= Number.MAX_VALUE || value2 >= Number.MAX_VALUE)
//     return 'value1(2) is too large';
//   let result;
//   if (result === Number.MAX_VALUE) return 'value1(2) is too large';
//   if (operation === '+') return value1 + value2;
//   if (operation === '-') return value1 - value2;
//   if (operation === '*') return value1 * value2;
//   if (operation === '/') return value1 / value2;
// };

// console.log(this.basicOp('+', 3, 5));

const ERROR_MESSAGES = {
  ARGUMENT_SHOULD_BE_A_NUMBER: 'value1(2) should be a number',
  ARGUMENT_SHOULD_NOT_BE_A_NAN: 'value1(2) should not be equal to NaN',
  VALUE_IS_TOO_LARGE: 'value1(2) is too large',
};
exports.ERROR_MESSAGES = ERROR_MESSAGES;

exports.basicOp = function basicOp(operation, value1, value2) {
  if (typeof value1 !== 'number' || typeof value2 !== 'number')
    return ERROR_MESSAGES.ARGUMENT_SHOULD_BE_A_NUMBER;
  if (isNaN(value1) || isNaN(value2))
    return ERROR_MESSAGES.ARGUMENT_SHOULD_NOT_BE_A_NAN;
  if (value1 >= Number.MAX_VALUE || value2 >= Number.MAX_VALUE)
    return ERROR_MESSAGES.VALUE_IS_TOO_LARGE;

  if (operation === '+') return value1 + value2;
  if (operation === '-') return value1 - value2;
  if (operation === '*') return value1 * value2;
  if (operation === '/') return value1 / value2;
};

console.log(this.basicOp('+', NaN, 5));
