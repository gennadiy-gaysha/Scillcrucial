// 1. На входе два одномерных массива. В каждом массиве всегда по два элемента. Верните третий массив результат которого будет сумма элементов предыдущих
Input: [2, 4], [1, 3];
Output: [3, 7];
Input: [1, 7], [9, 3];
Output: [10, 10];

const test = (arr1, arr2) => arr1.map((val, index) => val + arr2[index]);

function test(arr1, arr2) {
  return arr1.map((val, index) => val + arr2[index]);
}

console.log(test([1, 7], [9, 3]));

// 3.  Напишите функцию, которая принимает массив объектов с полем id. Например [{id: '100'}, {id: 2}] и возвращает массив этих id
// Input: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
// Output: [1, 2, 3, 4];
// Input: [{ id: true }];
// Output: [true];
const id = (arr) => arr.map((val, index) => Object.values(val).join());
console.log(id([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]));
// Task 4
// Напишите функцию, которая принимает массив чисел и возвращает массив строк по
// шаблону <div>{number}</div>
// Input: [1, 2];
// Output: ['<div>1</div>', '<div>2</div>'];
// Input: ['Anakin'];
// Output: ['<div>Anakin</div>'];
const divFunction = (arr) => arr.map((val) => `<div>${val}</div>`);
console.log(divFunction([1, 2]));

// Task 5
// Напишите функцию, которая принимает массив строк и возвращает массив строк с четным количеством букв
// Input: ['ab', 'abc', 'abcd'];
// Output: ['ab', 'abcd'];
// Input: ['abc', 'abcde'];
// Output: [];
const evenLength = (arr) => arr.filter((it) => it.length % 2 === 0);
console.log(evenLength(['abc', 'abcde']));

// Task 6
// Напишите функцию, которая принимает массив чисел и возвращает массив чисел умноженных на два, которые делятся на 10 без остатка
// Input: [1,2,3,7,10,5]
// Output: [20,10]
// Input: [1,2,3,7,9,4]
// Output: []

const doubleTen = (arr) =>
  arr.map((val) => val * 2).filter((it) => it % 10 === 0);
console.log(doubleTen([1, 2, 3, 7, 10, 5]));

// Task 7
// Напишите функцию, которая принимает массив булевых значений и возвращает массив только со значениями true

// Input: [true,false,true,true]
// Output: [true,true,true]
// Input: [false,true]
// Output: [true]
const trueNotFalse = (arr) => arr.filter((it) => it);
console.log(trueNotFalse([false, true]));

// Task 8
// Напишите функцию, которая принимает массив значений в тч и значения undefined и возвращает массив только без значений undefined

// Input: [true, false, true,true, undefined, true, undefined]
// Output: [true, false, true, true, true]
// Input: [undefined, true, undefined]
// Output: [true]

const noUndefined = (arr) => arr.filter((it) => typeof it !== 'undefined');

console.log(noUndefined([true, false, true, true, undefined, true, undefined]));

// Task 9
// Напишите функцию, которая принимает массив чисел и возвращает их сумму. Использовать reduce

// Input: [1,2,3,4,5]
// Output: 15
// Input: [2, 11, 5]
// Output: 18

const sum = (arr) => arr.reduce((acc, rec) => rec + acc);
console.log(sum([1, 2, 3, 4, 5]));

// Task 10
// Напишите функцию, которая принимает массив булевых значений и возвращает результат логичского И над ними. Использовать reduce

// Логическое И - это операция &&

// Input: [true,true,true,true]
// Output: true
// Input: [true,false,true]
// Output: false

const trueOrFalse = (arr) => arr.reduce((acc, rec) => acc && rec, true);
console.log(trueOrFalse([true, false, true]));

// Task 11
// Напишите функцию, которая принимает массив чего угодно и возвращает объект с полями {field1, field2, field3, field4}. Использовать reduce. Читайте описание наверху страницы, перед тем, как отчаиваться.

// Input: [true,1,'wow','you are smart, bro']
// Output: {field1: true, field2:1, field3: 'wow', field4: 'you are smart, bro'}

const field = (arr) =>
  arr.reduce((acc, rec, index) => ({ ...acc, [`field${index + 1}`]: rec }), {});

console.log(field([true, 1, 'wow', 'you are smart, bro']));

// Task 12
// Напишите функцию, которая принимает объект, как аргумент и возвращает новый объект. Только с полями, у которых тип значения - строка;

// Input: { name: 'pilot', isActive: true }
// Output: { name: 'pilot' }
// Input: { isActive: true }
// Output: {}
const test = (param) =>
  Object.entries(param)
    .filter((it) => typeof it[1] === 'string')
    .reduce((acc, rec) => ({ ...acc, [rec[0]]: rec[1] }), {});
console.log(test({ name: 'pilot', isActive: true, surname: 'Gaysha' }));

function test(param) {
  return Object.entries(param)
    .filter((it) => typeof it[1] === 'string')
    .reduce((acc, rec) => ({ ...acc, [rec[0]]: rec[1] }), {});
}

// Task 13
// Напишите функцию, которая принимает объект, как аргумент и возвращает новый массив с именами ключей - значение, которых false

// Input: { isActive: false, isPilot: true }
// Output: ['isActive']
function test(param) {
  return Object.entries(param)
    .filter((it) => !it[1])
    .map((val) => val[0]);
}
console.log(test({ isActive: false, isPilot: true }));

// Task 14
// Вам задан массив - верните среднее число массива. (сумма всех элементов деленное на количество элементов)
// Input: [4, 6]
// Output: 5
// Input: [2, 4]
// Output: 3

function test(param) {
  return param.reduce((acc, rec) => acc + rec) / param.length;
}
console.log(test([2, 4, 8, 6, 3]));

console.log([2, 4, 8, 6, 3].length);

// Task 15
// Напишите функцию, которая получает массив функций и начальное значение, как аргументы. Функция должна вернуть результат выполнения всех функций в массиве поочередно, используя начальное значение. Используйте reduce.
// Например
// [
// (a) => a+ 1,
// (a) => a * 2
// ],
// 5

// 5 начальное значение.
// Сначала запускается функция с ((a) => a+ 1)(5). Результат будет 6. теперь 6 используется во второй функции
// ((a) => a * 2)(6)

// Итог 12

// Количество функций в начальном массиве не ограничено
// Чтобы решить эту задачу - четко решите, что будет являться аккумулятором, что будет являться ресивером в редьюсе. Какие у них типы. Как пройдет редьюс в первом шаге и что он вернет.
// Задача решается в одну строчку, но тяжела для понимания. Ключ решения - ясность.

// Input: [ (a) => a+ 1, (a) => a * 2 ], 5
// Output: 12

// Input: [ (a) => a - 1, (a) => a * 2 ], 5
// Output: 8

// Input: [ (a) => a + 2, (a) => a * 5, (a) => a - 5 ], 3
// Output: 20

function test(array, initialValue) {
  array.reduce((acc, rec) => {
    return;
  }, initialValue);
}
console.log(test([(a) => a + 2, (a) => a * 5, (a) => a - 5], 3));

const array = [(a) => a + 2, (a) => a * 5, (a) => a - 5];
console.log(array[0](3));

const d = (a) => a + 2;
console.log(d(3));

// -----------------------------------------------------------

function test(array, initialValue) {
  return array.reduce((acc, rec, index) => {
    return rec(acc);
  }, initialValue);
}
console.log(test([(a) => a + 2, (a) => a * 5, (a) => a - 5], 3));

// --------------------------------------------------------------

function test(array, initialValue) {
  return array.reduce((acc, rec, index) => rec(acc), initialValue);
}
console.log(test([(a) => a + 2, (a) => a * 5, (a) => a - 5], 3));
