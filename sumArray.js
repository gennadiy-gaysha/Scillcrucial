exports.sumArray = function sumArray(array) {
  if (array === null) return 0;
  else if (typeof array === 'undefined') return 0;
  else if (array.length === 0) return 0;
  else if (array.length === 1) return 0;
  const result = array.reduce((acc, rec) => acc + rec, 0);
  return result - Math.max(...array) - Math.min(...array);
};
console.log(this.sumArray([6, 2, 3, 8, 11, 10]));
// ----------------------------------------------------------
exports.sumArray = function sumArray(array) {
  if (Array.isArray(array) && array.length >= 2) {
    array.sort((a, b) => a - b);
    array.pop();
    array.shift();
    return array.reduce((acc, rec) => acc + rec, 0);
  }
  return 0;
};
console.log(this.sumArray([6, 2, 3, 8, 11, 10]));
// ----------------------------------------------------------

// Условие:
// 1. на входе подается числовой массив, у которого могут быть повторяющиеся элементы;
// 2. массив может быть пустым, состоящим из одного элемента, undefined или null

// 1. серия тестов с массивами из 2 элементов:
// - массив из 2 одинаковых положительных элементов;
// - массив из 2 одинаковых отрицательных элементов;
// - массив из 2 нулей;

// - массив из 2 разных положительных элементов;
// - массив из 2 разных отрицательных элементов;
// - массив из положительного и отрицательного элемента;
// - массив из 0 и отрицательного элемента;
// - массив из 0 и положительного элемента;

// 2. серия тестов из массива с более, чем 2 элементами:
// - массив из 3 одинаковых элементов;
// - массив из 3 элементов, 2 из которых одинаковы;
// - массив из 3 разных элементов;

// - массив из нескольких отрицательных элементов,
// из которых макс. и мин. элементы - повторяющиеся значения;
// - массив из нескольких положительных элементов,
// из которых макс. и мин. элементы - повторяющиеся значения;
// - массив из нескольких отрицательных, 0 и положительных элементов,
// из которых макс. и мин. элементы - повторяющиеся значения;

// - массив из нескольких отрицательных элементов,
// из которых макс. и мин. элементы - не повторяющиеся значения;
// - массив из нескольких положительных элементов,
// из которых макс. и мин. элементы - не повторяющиеся значения;
// - массив из нескольких отрицательных, 0 и положительных элементов,
// из которых макс. и мин. элементы - не повторяющиеся значения;

// 3. серия тестов с пустышками:
// - тест с пустым массивом [];
// - тест с массивом из 1 элемента;
// - тест с undefined;
// - тест с null;
