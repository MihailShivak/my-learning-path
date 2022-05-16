// Создание массива 

// let arr = new Array(); // используется редко
let arr = [];

// значение массива 

//получение массива
let arrOne = [
   'Ivan', // 0я позиция
   'Ishtvan', // 1я позиция
   'Olya', // 2я позиция
];
//or
// let arrOne = ['Ivan', 'Ishtvan', 'Olya',];
console.log(arrOne[1]);

// разные типы значений 
let arrTwo = [
   "Nikolay",
   {
      type: "JS",
      age: 35
   },
   true,
   function(){
      console.log("Hello, I'm Nikolay");
   }
];
console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);
console.log(arrTwo[2]);
arrTwo[3]();

// Многомерные массивы
let matrix = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
];
console.log(matrix);
console.log(matrix[0][1]);

// Длина массива. Свойство length

let arrOneV1 = ['Ivan', 'Ishtan', 'Olga'];
console.log(arrOneV1);
console.log(arrOneV1.length);

//arrOneV1.length = 0; - очищает массив
//console.log(arrOneV1);

// Доступ к массиву 
let arrV1 = ['Ivan', 'Ishtan', 'Olga'];
console.log(arrV1);

let arrNew = arrV1;

arrNew.length = 2;
console.log(arrV1);

// Изменение значений 
let arrV2 = ['Ivan', 'Ishtan', 'Olga'];

// Меняем существующее
arrV2[0] = 'Nick';
console.log(arrV2);
// Добавляем новое 
arrV2[3] = 'Ваня';
console.log(arrV2);

// Методы массивов 
/*
варианты применения массивов:
Первый из них это очередь или упорядоченная коллекция элементов.
Очередь поддерживает два вида операций:
1. добавление элемента в конец очереди
2. удаление элемента в начале, сдвигая очередь,
	так что второй элемент становится первым.

Другой вариант применения для массивов – структура данных,
называемая стек.
Стек поддерживает два вида операций:
1. добавление элемента в конец
2. удаление последнего элемента

Массивы в JavaScript могут работать и как очередь, и как стек.
Мы можем добавлять/удалять элементы как в начало, так и в конец массива.
И в этом нам помогут следующие методы:
*/

// Метод push - добавляет элемент в конец массива
let arrV3 = ['Ivan', 'Ishtan', 'Olga'];
arrV3.push('Vasya');
console.log(arrV3);

arrV3.push('Dima', 'Katya');
console.log(arrV3);

// Метод pop  - удаляет последний элемент
let arrV4 = ['Ваня', 'Иштван', 'Оля',];
arrV4.pop();
console.log(arrV4);

// Метод shift - удаляет элемент в начале,
// так что второй элемент становится первым.
let arrV5 = ['Ваня', 'Иштван', 'Оля',];
arrV5.shift();
console.log(arrV5);

// Метод unshift  - добавляет элемент в начало массива
let arrV6 = ['Ваня', 'Иштван', 'Оля',];
arrV6.unshift('Вася');
console.log(arrV6);

arrV6.unshift('Дима', 'Катя');
console.log(arrV6);

/*
Методы push/pop выполняются быстро, а методы shift/unshift – медленно.

Давайте рассмотрим на примере добавления элемента
в начало массива (unshift);

Просто взять и добавить элемент с номером 0 недостаточно.
Нужно также заново пронумеровать остальные элементы.

Операция unshift должна выполнить 3 действия:
 1. Добавить элемент с индексом 0.
 2. Сдвинуть все элементы вправо, заново пронумеровать их,
	заменив 0 на 1, 1 на 2 и т.д.
 3. Обновить свойство length.

Чем больше элементов содержит массив, тем больше
времени потребуется для того, чтобы их переместить,
больше операций с памятью.

А вот что бы добавить элемент в конец массива (метод push)
не нужно ничего перемещать.
Так же не нужно заново нумеровать элементы. Достаточно
увеличить значение length.
*/

// Удаление/добавление/изменение конкретных элементов
let arrV7 = ['Ваня', 'Иштван', 'Оля',];
delete arrV7[1];
console.log(arrV7);

// Метод splice. Позволяет добавлять, удалять и заменять элементы.
// Синтаксис arr.splice(index[, deleteCount, elem1, ..., elemN])

// Удаляем элемент
let arrOneV2 = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (Иштван), удаляем один элемент
arrOneV2.splice(1, 1);
console.log(arrOneV2);

// Удаляем элемент и возвращаем его в переменную
let arrTwoV1 = ['Ваня', 'Иштван', 'Оля',];
let removed = arrTwoV1.splice(1, 1);
console.log(removed);

// Заменяем элементы
let arrThree = ['Ваня', 'Иштван', 'Оля',];
// Начиная с нулевой позиции (Ваня), заменяем один элемент
arrThree.splice(0, 1, 'Nick');
console.log(arrThree);

// Добавляем элементы
let arrFour = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (перед 'Иштван'), добавляем два элемента
arrFour.splice(1, 0, 'Nick', 'Masha');
console.log(arrFour);

// Удаляем элемент
let arrFive = ['Ваня', 'Иштван', 'Оля',];
// Начиная с последней позиции (Оля), удаляем один элемент
arrFive.splice(-1, 1);
console.log(arrFive);

// Метод slice.
// Cоздаёт новый массив, в который копирует часть либо весь массив
// Синтаксис arr.slice([start], [end]) Не включая [end]

// Копируем часть массива 
let arrOneV3 = ['Ваня', 'Иштван', 'Оля',];

// Начиная с 1й позиции 'Иштван',
// до 2й позиции 'Оля' (не включая)
let arrTwoV2 = arrOneV3.slice(1, 2);
console.log(arrTwoV2);

// Начиная с предпоследней позиции 'Иштван',
// до последней 'Оля' (не включая)
let arrThreeV1 = arrOneV3.slice(-2, -1);
console.log(arrThreeV1);

// Копируем весь массив
let arrFourV1 = arrOneV3.slice();
console.log(arrFourV1);

// Метод concat.
// Cоздаёт новый массив, в который копирует данные из других массивов
// и дополнительные значения (в конец массива)
// Синтаксис arr.concat(arg1, arg2...)

let arrOneV4 = ['Ваня', 'Иштван', 'Оля',];
let arrTwoV3 = arrOneV4.concat('Petya');
console.log(arrTwoV3);

// Поиск в массиве

// Методы indexOf/lastIndexOf и includes
// алналоги строковым методам
/*
1. arr.indexOf(item, from) ищет item, начиная с индекса from,
	и возвращает индекс, на котором был найден искомый
	элемент, в противном случае - 1.
2. arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
3. arr.includes(item, from) – ищет item, начиная с индекса from,
	и возвращает true, если поиск успешен.
*/
let arrV8 = ['Ваня', 'Иштван', 'Оля',];

// indexOf
console.log(arrV8.indexOf('Иштван'));
console.log(arrV8.indexOf('Вася'));
console.log(arrV8.indexOf('Иштван', 2));

// includes
console.log(arrV8.includes('Иштван'));
console.log(arrV8.includes('Вася'));
console.log(arrV8.includes('Иштван', 2));

// find и findIndex
// поиск в массиве объектов с пределённым условием

/*
// Синтаксис
let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});
*/
let arrV9 = [
   { name:'Вася', age: 36 },
   { name:'Коля', age: 18 },
   { name:'Оля', age: 'Не скажу' },
]
let resultOne = arrV9.find(function(item, index, array) {
   return item.age === 18;
});
console.log(resultOne);

//findIndex
let resultTwo = arrV9.findIndex(item => item.age === 18);
console.log(resultTwo);

// filter
// Метод ищет все элементы, на которых функция-колбэк вернёт true.
/*
let results = arr.filter(function (item, index, array){
   // если true - элемент добавляется к результату, перебор продолжается
   // возвращается пустой массив в случае, если ничего не найдено
});
*/
let arrV10 = [
   {name:'Вася', age: 36},
   {name:'Коля', age: 18},
   {name:'Оля', age: 'Не скажу'},
]
let resultV1 = arrV10.filter(function(item, index, array){
   return item.age >= 18;
})
console.log(resultV1);

// Сортировка массивов

// Метод sort(fn)
// сортирует массив на месте, меняя в нём порядок элементов.

// Сотритовка слов
let arrOneV5 = ['Иштван', 'Ваня', 'Оля'];
console.log(arrOneV5.sort());

// Сортировка чисел
let arrTwoV4 = [8, 22, 1,];
console.log(arrTwoV4.sort());
// По умолчанию элементы сортируются как строки.
// Для строк применяется лексикографический порядок,
// и действительно выходит, что "8" > "22".

// Функция сортировки

/*
function compareNumeric(a,b){
   console.log(`сравниваем ${a} и ${b}`);
   if (a > b) return 1;
   if (a == b) return 0;
   if (a < b) return -1;

}
*/
console.log(arrTwoV4.sort((a, b) => a - b)); //- стрелочная функция
//console.log(arrTwoV4.sort(compareNumeric));

// Метод reverse
// меняет порядок элементов в массиве на обратный.
let arrOneV6 = ['Ваня', 'Иштван', 'Оля'];
console.log(arrOneV6.reverse());

// Преобразование массивов
// Метод map.
// вызывает функцию для каждого элемента массива 
// и возвращает массив результатов выполнения этой функции.
/*
let result = arr.map(function(item, index, array) {
   // возвращается новое значение вместо элемента
});
*/
let arrV11 = ['Ваня', 'Иштван', 'Оля',];

let resultV2 = arrV11.map(function(item, index, array){
   return item[0];
});
//let result = arr.map(item => item[0]); //- стрелочная функция
console.log(arrV11);
console.log(resultV2);

/*
 Метод split преобразовывает строку в
 массив по заданному разделителю
 Синтаксис: str.split(delim)
*/
let str = 'Ваня,Иштван,Оля';
let arrV12 = str.split(',');
console.log(arrV12);

// Можно ограничить кол-во объектов
// которые попадут в массив
let arrTwoV5 = str.split(',', 2);
console.log(arrTwoV5);

/*
 Метод join преобразовывает массив в
 строку c заданным разделителем
 Синтаксис: arr.join(glue)
*/
let arrV13 = ['Ваня', 'Иштван', 'Оля',];
let srtV1 = arrV13.join('.');
console.log(srtV1);

// Получение строки из массива
let arrTwoV6 = ['Ваня', 'Иштван', 'Оля'];
console.log(String(arrTwoV6));

// Проверка Array.isArray()

let obj = {};
let arrVV = [];
console.log(typeof obj);
console.log(typeof arrVV);


// Как же нам узнать где массив а где нет?
if (Array.isArray(arrVV)) {
	console.log('Это массив!');
} else {
	console.log('Это не массив!');
}

// Цикл FOR...OF
// Можно использовать для вывода значений
let arrV14 = ['Ваня', 'Иштван', 'Оля',];

for (let arrItem of arrV14) {
   console.log(arrItem);
}

// Метод перебора forEach
// Выполняет функцию для каждого элемента массива
/*
arr.forEach(function(item, index, array){
   // ... делать что-то с item
});
*/
let arrV15 = ['Ваня', 'Иштван', 'Оля',];
/*
arrV15.forEach(function(item,index,array){
   console.log(`${item} находится на ${index} позиции в ${array}`);
});
*/
arrV15.forEach((item,index,array)=>{
   console.log(`${item} находится на ${index} позиции в ${array}`);
}); // - стрелочная функция
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
arr.forEach(show);

function show(item) {
	console.log(item);
}
*/

// Методы reduce/reduceRight
/*
// Синтаксис
let value = arr.reduce(function(previousValue, item, index, array) {
  // ...
}, [initial]);
*/
/*
К привычным нам аргументам item, index, array
добавляется previousValue:

previousValue – результат предыдущего вызова этой функции,
равен initial при первом вызове (если передан initial),
item – очередной элемент массива,
index – его индекс,
array – сам массив.

Функция применяется по очереди ко всем элементам
массива и «переносит» свой результат на следующий вызов.
*/
let arrOneV7 = [1,2,3,4];
let reduceValueOne = arrOneV7.reduce(function(previousValue, item, index, array){
   return item + previousValue;
}, 0);
console.log(reduceValueOne);
/*
Шаг №1
previousValue = 0
item = 1
их сумма = 1

Шаг №2
previousValue = 1
item = 2
их сумма = 3

Шаг №3
previousValue = 3
item = 3
их сумма = 6

Шаг №4
previousValue = 6
item = 4
их сумма = 10
*/
/*
let arrArrow = [1, 2, 3, 4];
let reduceValueArrow = arrArrow.reduce((pValue, item) => item + pValue, 0);
console.log(reduceValueArrow);
*/

let arrTwoV7 = ['Ваня', 'Иштван', 'Оля',];
/*
Если не указать начальное значение, то оно будет равно
первому элементу массива (previousValue=Ваня)
А работа метода начнется со второго элемента (item=Иштван)
*/
let reduceValueTwo = arrTwoV7.reduce(function(previousValue, item, index, array){
   console.log(previousValue);
   console.log(item);
   return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValueTwo}`);

// Метод arr.reduceRight работает аналогично, 
// но проходит по массиву справа налево.