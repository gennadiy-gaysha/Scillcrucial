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
// function arrayDiff(a, b) {
//   const regexp = new RegExp(b, 'g');
//   return a
//     .join('')
//     .replace(regexp, '')
//     .split('')
//     .map((val) => val * 1);
// }
// console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

// const a = [1, 2, 2, 2, 3];
// console.log(a.join(' ').replace(/ /g, ' - '));

// // const regexp = new RegExp([1-2]/'g');
// console.log(
//   a
//     .join('')
//     .replace(/[1 - 2 - 3]/g, '')
//     .split('')
//     .map((val) => val * 1)
// );

// console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

// https://www.codewars.com/kata/5aee86c5783bb432cd000018
// https://www.codewars.com/kata/59859f435f5d18ede7000050

// -------------------------------------------------------------------------------------------------

// Список задач на работу с массивами и объектами
// https://www.codewars.com/kata/582746fa14b3892727000c4f
function countDevelopers(list) {
  const filteredByLanguages = list.filter((it) => {
    return it.language === 'JavaScript';
  });
  const filteredContinent = filteredByLanguages.filter((it) => {
    return it.continent === 'Europe';
  });
  return filteredContinent.length;
}

// https://www.codewars.com/kata/coding-meetup-number-2-higher-order-functions-series-greet-developers
// https://www.codewars.com/kata/coding-meetup-number-3-higher-order-functions-series-is-ruby-coming
// https://www.codewars.com/kata/coding-meetup-number-4-higher-order-functions-series-find-the-first-python-developer
// https://www.codewars.com/kata/coding-meetup-number-5-higher-order-functions-series-prepare-the-count-of-languages
// https://www.codewars.com/kata/coding-meetup-number-6-higher-order-functions-series-can-they-code-in-the-same-language
// https://www.codewars.com/kata/coding-meetup-number-7-higher-order-functions-series-find-the-most-senior-developer
// https://www.codewars.com/kata/coding-meetup-number-8-higher-order-functions-series-will-all-continents-be-represented
// https://www.codewars.com/kata/coding-meetup-number-9-higher-order-functions-series-is-the-meetup-age-diverse
// https://www.codewars.com/kata/coding-meetup-number-10-higher-order-functions-series-create-usernames
// https://www.codewars.com/kata/coding-meetup-number-11-higher-order-functions-series-find-the-average-age
// https://www.codewars.com/kata/coding-meetup-number-12-higher-order-functions-series-find-github-admins
// https://www.codewars.com/kata/coding-meetup-number-13-higher-order-functions-series-is-the-meetup-language-diverse
// https://www.codewars.com/kata/coding-meetup-number-14-higher-order-functions-series-order-the-food
// https://www.codewars.com/kata/coding-meetup-number-15-higher-order-functions-series-find-the-odd-names
// https://www.codewars.com/kata/coding-meetup-number-16-higher-order-functions-series-ask-for-missing-details
// https://www.codewars.com/kata/coding-meetup-number-17-higher-order-functions-series-sort-by-programming-language
