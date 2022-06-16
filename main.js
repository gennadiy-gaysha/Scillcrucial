const calc = require('./calc');
const format$ = require('./format$');
const { splitTheBill } = require('./bill');

console.log(calc.basicOp('*', 5, 3));
console.log(format$.formatMoney(100));
console.log(
  splitTheBill({
    A: 45,
    B: 25,
    C: 10,
  })
);
