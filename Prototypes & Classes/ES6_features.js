//обычный способ
function greetings(name) {
  if (typeof name === 'undefined') {
    console.log('noname');
    return;
  }
  console.log(`Hello, ${name}`);
}
greetings('Gena');
greetings();
// Hello, Gena;
// noname;

//lasy initialization
function greetings(name = 'noname') {
  //если нет аргумента - noname
  console.log(`Hello, ${name}`);
}
greetings('Gena');
greetings();
// Hello, noname;
// Hello, Gena;
// --------------------------------------------------
//Обычный способ
function greetings(obj) {
  console.log(obj.name);
}
greetings({ name: 'Gena' });
//Gena

//Decomposing
function greetings({ name }) {
  console.log(name);
}
greetings({ name: 'Gena' });
//Gena

//если поля name нет
function greetings({ name = 'noname' }) {
  console.log(name);
}
greetings({}); //noname
greetings(); //exception

//но можем сделать lazy initialization
//усли объект undefined, то вместо него берем { name: 'naname' }
function greetings({ name = 'noname' } = { name: 'naname' }) {
  console.log(name);
}
greetings({}); //noname
greetings(); //noname

//То же и с массивами:
//Decomposing с массивами  и реструктуризация
// useState(0) - функция в реакте, которая возвращает массив
//0 - initial value
//возвращает массив из 2 элементов: 0 элемент - значение,
//1-ый элемент - функция, которая изменяет занчение
const array = useState(0);
const [counter, setCounter] = useState(0);
// это аналогично:
// const counter = array[0];
// const setCounter = array[1];
// --------------------------------------------------
// Decomposing

const obj = {
  key1: 'value1',
  key2: 'value2',
};
console.log(Object.entries(obj));
// [
//   ['key1', 'value1'],
//   ['key2', 'value2'],
// ];
const obj = {
  age: '45',
  name: 'Gena',
};
console.log(
  Object.entries(obj).map(([key, value]) => {
    return { key, value };
  })
);
// --------------------------------------------------
// Рест/Спред оператор - вытаскиваем поля с нужным ключом
// Rest оператор используется для получения значений из массива или объекта
const obj = {
  age: '45',
  name: 'Gena',
};

const { name, ...objName } = obj;
console.log(objName);
// --------------------------------------------------
// Разделение массива на массивы
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const [firstEl, secondEl, ...restArr] = arr;
console.log([firstEl, secondEl]);
console.log(restArr);
console.log(arr);
// [1, 2]
// [3, 4, 5, 6, 7, 8]
// [1, 2, 3, 4, 5, 6, 7, 8];
// --------------------------------------------------
// Shorthand operator
const name = 'Gena';
const obj = {
  name,
  age: '54',
};
console.log(obj);
// { name: 'Gena', age: '54' }
//сокращение по полу функия - обычный способ
const obj = {
  age: '54',
  myFunction: function () {},
};
// сокращенный способ:
const obj = {
  age: '54',
  myFunction() {},
};
