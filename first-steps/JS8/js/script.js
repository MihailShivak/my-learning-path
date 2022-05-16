// ЧИСЛА

//let someBigNum = 1000000;
//console.log(someBigNum);
let someBigNum = 1e6; // 1 * 1000000
console.log(someBigNum);

//let someLittleNum = 0.000001;
//console.log(someLittleNum);
let someLittleNum = 1e-6; // 1 / 1000000
console.log(someLittleNum);

// шестнадцатиричные, двоичные и восьмеричные числа

/*
Шестнадцатиричные числа широко используются в JS
для представления цветов, кодировка символов и др.
*/

console.log(0xFF); // - 0xFF = 255

// Реже испльзуются двоичные и восьмеричные числа

console.log(0b11111111); // 255
console.log(0o377); //255

// метод toString(base)
// метод num.toString(base) возвращает строковое
// представление числа в той или иной системе счисления (base)
// base может принимать значения от 2 до 36 (по умолчанию 10)

let num = 255;
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));

// Округление чисел

// в JS встроен Math, который содержит
// несколько функций для работы с округлением:

// Math.floor - округление в меньшую сторону
let numOne = Math.floor(5.8);
let numTwo = Math.floor(2.2);
let numThree = Math.floor(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);

// Math.ceil округляет в большую сторону
let numOneV1 = Math.ceil(5.8);
let numTwoV1 = Math.ceil(2.2);
let numThreeV1 = Math.ceil(-2.2);

console.log(numOneV1);
console.log(numTwoV1);
console.log(numThreeV1);

// Math.round - округление до ближайшего целого
let numOneV2 = Math.round(5.8);
let numTwoV2 = Math.round(2.2);
let numThreeV2 = Math.round(-2.2);

console.log(numOneV2);
console.log(numTwoV2);
console.log(numThreeV2);

// как получить 5,8 или 5,85

let numOneV3 = Math.round(5.845 * 10) / 10;
let numTwoV3 = Math.round(5.845 * 100) / 100;
let numThreeV3 = Math.round(5.8449 * 100) / 100;

console.log(numOneV3);
console.log(numTwoV3);
console.log(numThreeV3);

// Метод toFixed(n) - округление числа до n знаков после запятой
let numOneV4 = 5.845;
console.log(numOneV4.toFixed(1));

// Преобразовать в число
console.log(+numOneV4.toFixed(1));
console.log(Number(numOneV4.toFixed(1)));

//parseInt и parseFloat
/*
Для получения чисел из такой строки существуют parseInt и parseFloat.
Если в процессе чтения возникает ошибка, они возвращают полученное до
ошибки число.

Функция parseInt возвращает целое число, а parseFloat
возвращает число с плавающей точкой:
*/
let valueOne = parseInt("150.58px");
console.log(valueOne);
console.log(typeof valueOne);

let valueTwo = parseFloat("150.58px");
console.log(valueTwo);
console.log(typeof valueTwo);

/*
Функция parseInt() имеет необязательный второй параметр.
Он определяет систему счисления, таким образом parseInt
может также читать строки с шестнадцатеричными числами,
двоичными числами и т.д.:
*/
console.log(parseInt('0xff', 16));
console.log(parseInt('ff', 16));

//Math.random()
//Возвращает псевдослучайное число в 
//диапазоне от 0(включительно) до 1(но не включая 1)

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//Math.max(a, b, c...) / Math.min(a, b, c...)
//Возвращает наибольшее/наименьшее число из перечисленных аргументов.

console.log(Math.max(5,85,-49));
console.log(Math.min(5,85,-49));

//Math.abs()
//возвращает абсолютное значение (модуль) числа.

let numV1 = -58;
console.log(Math.abs(numV1))

//Math.pow(n, power)
//Возвращает число n, возведённое в степень power

console.log(Math.pow(5, 8));

