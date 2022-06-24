exports.basicOp = function basicOp(operation, value1, value2) {
  if (typeof value1 !== 'number' || typeof value2 !== 'number')
    throw new MyError(
      `Both typeof value1 (${typeof value1}) and typeof value2 (${typeof value2}) should have typeof number`
    );

  if (operation === '+') return value1 + value2;
  if (operation === '-') return value1 - value2;
  if (operation === '*') return value1 * value2;
  if (operation === '/') return value1 / value2;
};

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MyError';
  }
}

exports = { MyError };

// console.log(this.basicOp('+', 3, 5));
