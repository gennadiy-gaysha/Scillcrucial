// Дополнительные задачки на закрепление знаний:
// https://www.codewars.com/kata/53ee5429ba190077850011d4
function doubleInteger(i) {
  i *= 2;
  return i;
}

// https://www.codewars.com/kata/50654ddff44f800200000004
const multiply = (a, b) => a * b;

// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd
const paperwork = (n, m) => (n < 0 || m < 0 ? 0 : n * m);

// https://www.codewars.com/kata/5875b200d520904a04000003
function enough(cap, on, wait) {
  if (wait + on - cap > 0) return wait + on - cap;
  else return 0;
}
// or
const enough = (cap, on, wait) => Math.max(on + wait - cap, 0);

// https://www.codewars.com/kata/53369039d7ab3ac506000467
const boolToWord = (bool) => (bool ? 'Yes' : 'No');

// https://www.codewars.com/kata/58fa273ca6d84c158e000052
const digits = (n) => String(n).length;

// Чуть посложнее:
// https://www.codewars.com/kata/523f5d21c841566fde000009
function arrayDiff(a, b) {}

const a = [1, 3, 4, 7, 8];

// https://www.codewars.com/kata/5aee86c5783bb432cd000018
// https://www.codewars.com/kata/59859f435f5d18ede7000050
