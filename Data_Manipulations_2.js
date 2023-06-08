// Task 1
//пересечение массивов
// функция, которая принимает два массива чисел и возвращает массив чисел, которые есть в обоих массивах значения должны быть уникальны
const uniqueArr = (arr1, arr2) =>
  [...new Set(arr1)].filter((val) => [...new Set(arr2)].includes(val));
console.log(uniqueArr([7, 14, 14], [14, 28]));
// -------------------------------------------------------------
// Task 2
// функция, которая принимает массив объектов и возвращает объект с ключами взятыми из полей token
// и значения объекта. Каждый объект содержит уникальный ключ в token
// Input: [{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}]
// Output: {'1': {token: 1}, '2':{token: 2, value:23}, '3':{token: 3, name:'superman'}, '4': {token: 4}}
const result = (arr) => {
  return arr.reduce((acc, rec, index, arr) => {
    return { ...acc, [rec.token]: rec };
  }, {});
};
console.log(
  result([
    { token: '7' },
    { token: '2', value: 23 },
    { token: '37', name: 'superman' },
    { token: '45' },
  ])
);
// -------------------------------------------------------------
// Task 3
//создание объекта из массива с подсчетом кол-ва элементов массива
const count = (arr) => {
  return arr.reduce((acc, rec) => {
    console.log(rec, acc);
    return typeof acc[rec] !== 'undefined'
      ? { ...acc, [rec]: acc[rec] + 1 }
      : { ...acc, [rec]: 1 };
  }, {});
  console.log(rec, acc);
};
console.log(count(['a', 'b', 'a']));
// -------------------------------------------------------------
// Task 4
//функция, которая принимает массив массивов и возвращает одноранговый массив
// [[1, 2, 3], [4, 5], [6], [7, 8, 9]];
const arr4 = (arr) => {
  return arr.reduce((acc, rec) => {
    return [...acc, ...rec];
  }, []);
};
console.log(arr4([[1, 2, 3], [4, 5], [6], [7, 8, 9]]));
// -------------------------------------------------------------
// Task 5
// функция, которая принимает объект и возвращает массив массивов состоящих из двух
// элементов [ключ, значение]
// Input: {a:1,b:2, c: true}
// Output: [['a',1], ['b',2], ['c', true]]
const objToArr = (obj) => {
  return Object.keys(obj).reduce((acc, rec, index) => {
    return [...acc, [Object.keys(obj)[index], obj[rec]]];
  }, []);
};
console.log(objToArr({ a: 1, b: 2, c: true }));

// -------------------------------------------------------------
// Task 6
// функция, которая принимает массив значений и возвращает массив без дубликатов
const uniqueArr = (arr6) => [...new Set(arr6)];
console.log(uniqueArr([true, false, true, true]));
// -------------------------------------------------------------
// Task 7
// функция, которая принимает имя поля, ключевое слово и массив объектов, а возвращает массив элементов (объектов) у которых в заданном поле, есть значение ключевого слова
// Input: 'title',
//   'hello',
[
  { title: 'hello world', rating: 1 },
  { title: 'not a helloo', rating: 5 },
  { title: 'new World', rating: 0 },
];
// Output: [
//   { title: 'hello world', rating: 1 },
//   { title: 'not a helloo', rating: 5 },
// ];
const arr7 = (field, key, arr) => {
  return arr.filter((it) => {
    return it[field].includes(key);
  });
};
console.log(
  arr7('title', 'hello', [
    { title: 'hello world', rating: 1 },
    { title: 'not a helloo', rating: 5 },
    { title: 'new World', rating: 0 },
  ])
);
// -----------------------------------------------
// Task 8
// функция, которая принимает строку на входе и разбивает ее на токены, удаляет все пустые токены, возвращает массив объектов со значениями {id, token}. Разбивать строку на токены надо по символу - /
// Input: http://google.com/hello/world
// Output: [{"id":0,"token":"http:"},{"id":1,"token":"google.com"},{"id":2,"token":"hello"},{"id":3,"token":"world"}]

const tokenId = (str) =>
  str
    .split('/')
    .filter((it) => it.length !== 0)
    .map((val, index) => ({ id: index, token: val }));
console.log(tokenId('http://google.com/hello/world'));

// -----------------------------------------------
// Task 9
// функция, которая принимает строку и возвращает новую строку, где после каждой фразы(между запятой) стоит в скобках длина этой фразы. Используйте split, join, map
// Input: 'hello,world,abra,carabfa,re,wrewer,rwer';
// Actions: Output: 'hello(5),world(5),abra(4),carabfa(7),re(2),wrewer(6),rwer(4)';

const lengthCount = (str) =>
  str
    .split(',')
    .map((val) => `${val}(${val.length})`)
    .join();

console.log(lengthCount('hello,world,abra,carabfa,re,wrewer,rwer'));
// -----------------------------------------------
// Task 10
// каррирование. Напишите функцию, которая принимает строку и возвращает другую функцию, которая принимает строку и возвращает результат по шаблону ${arg1}/${arg2}
// Input: 'http://google.com';
// Output: 'http://google.com/search';
const url = (arg1) => (arg2) => `${arg1}/${arg2}`;
console.log(url('http://google.com')('search'));

// -----------------------------------------------
// Task 11
// Задача с интервью. Функция принимает строку и число. Ваша задача вернуть массив под строк не превышающий по длине это число. Для того, чтобы преобразовать строку в массив - используйте .split('')

// Для решения задачи надо получить массив букв

// Добавить редьюс
// Начальное значение редьюса массив с пустой строкой
// Если в текущей итерации в последнем элементе массива букв меньше, чем надо - добавить букву
// Если букв столько сколько надо - добавить новый элемент с 1 текущей буквой в конец массива;
// Input: "abrac", 2
// Actions:
// Output: ["ab", "ra", "c"]
// Input: "abracadabra", 4
// Actions:
// Output: ["abra", "cada", "bra"]

'abracadabra', 4;

const interview = (str) => {
  return str.split('').reduce(
    (acc, rec, index) => {
      console.log(index, rec, acc);
      if (acc[acc.length - 1].length - 1 < 3) return [acc + rec];
      else return [rec];
    },
    ['']
  );
};
console.log(interview('abracadabra'));
