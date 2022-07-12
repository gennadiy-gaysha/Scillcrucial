// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
exports.accum = (s) =>
  s
    .toUpperCase()
    .split('')
    .reduce(
      (acc, rec, index) => [...acc, rec + rec.toLowerCase().repeat(index)],
      []
    )
    .join('-');
console.log(this.accum('abcdefghijklmnopqrstuvwxyz'));

// Условие:
// на входе строка только с буквенными символами (Upper & Lower Case)

// Тесты:
// 1. только upperCase
// 2. только lowerCase
// 3. Upper & Lower Case, Upper Case по краям и в середине
// 4. Upper & Lower Case, Lower Case по краям и в середине
// 5. строка из одной буквы Upper Case
// 6. строка из одной буквы Lower Case
// 7. весь алфавит в Upper Case ABCDEFGHIJKLMNOPQRSTUVWXYZ
// 8. весь алфавит в Lower Case abcdefghijklmnopqrstuvwxyz
// let str = ''; //65-90, 97-122
// for (let index = 97; index <= 122; index++) {
// 	str += String.fromCharCode(index);
// }
// console.log(str);
