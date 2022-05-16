let message = "message complete";

if (2 > 1) {
   //Код выполняется только если 
   //выражение в скобках вернёт true
   console.log(message);
}

let first = 5;
let second = 10;
let messageFalse = "the message is not being executed";

if (first === second) (
   //Код выполняется только если 
   //выражение в скобках вернёт true
   console.log(message)
) 
else {
   //Код выполнится только если
   //выражение в скобках вернёт false
   console.log(messageFalse);
}

let number = 5;

if (number > 50) {
   console.log('5 больше 50');
} else if (number > 30) {
   console.log('5 больше 30');
} else if (number > 10) {
   console.log('5 больше 10');
} else if (number > 1) {
   console.log('5 больше 1');
} else {
   console.log('Условие не выполнено');
}

// Условный оператор "?"
let messageV1 = "Hello";
let messageEnd = (5 > 1) ? ", John!" : ", Maria!";
// : заменяет else

/* 
стандартная запись:
if (5 >1) {
   messageEnd = ", John!";
} else {
   messageEnd = ", Maria!";
}
*/

messageV1 += messageEnd;
console.log(messageV1);

/* 
ЦИКЛЫ for и while
*/

// Цикл while

/*while (условие) {
   //тело цикла
   //тут выполняется код
}*/
let num = 0;
while (num < 5) {
   console.log(num);
   num++;
}

// Цикл for

/*for (Начало; Условие; Шаг) {
   // Тело цикла
   // Тут будет выполняться код
}*/
for (let numV1 = 0; numV1 < 5; numV1++) {
   console.log(numV1);
}
let numV2 = 0;
for (; numV2 < 5; numV2++) {
   console.log(numV2);
   if (numV2 == 2) break;
}
console.log(`Работа окончена, num = ${numV2}`);
// break - оканчивает работу цикла досрочно, если цикл дошёл до заданного условия

let numV3 = 0;
for (; numV3 < 5; numV3++) {
   if (numV3 == 2) continue;
   console.log(numV3);
}
// continue - прерывает выполнение определённого условия в цикле, как бы перескакивает через него, и продолжает работу цикла

// ФУНКЦИИ В JS 
/*function name(settings){
   // function's code (body)
}*/
function showMessage(){
   console.log('message');
}
// чтобы запустить функцию, необходимо дать команду запуска:
showMessage();

// вложенность и видимость функций

function getSumm(){
   let numOne, numTwo;

   function getNumOne(){
      numOne = 1;
   }
   function getNumTwo(){
      numTwo = 2;
   }
   getNumOne();
   getNumTwo();

   let numSumm = numOne + numTwo;
   console.log(numSumm);
}
getSumm();

// функции-колбэки
function calcSumm(numThree, numFour, more, less) {
   let numSummV2 = numThree + numFour;

   if (numSummV2 > 3){
      more()
   } else {
      less()
   }
}

function showMoreMessage() {
   console.log('more when 3');
}
function showLessMessage() {
   console.log('less when 3');
}
calcSumm(1, 5, showMoreMessage, showLessMessage);

//возврат результата 
function calcSummV2(numFive, numSix){
   let numSummV3 = numFive + numSix;

   //возврат
   return numSummV3;
   //дальше код не выполняется
}
let functionRez = calcSummV2(1, 2);
console.log(`summ: ${functionRez}`);

// рекурсия - когда функция вызывает саму себя
function calcSummV3(numSeven, numEight){
   if (numEight === 1){
      return numSeven;
   } else {
      return numSeven * calcSummV3(numSeven, numEight - 1);
   }
}
console.log(calcSummV3(2, 3));

// функциональное выражение

let showMessageV1 = function(){
   console.log('Hello!');
}
showMessageV1();

// функцции стрелки
/*
// функц выражение 
let имя переменной = function (settings, ...settings){
   return выражение;
}

// стрелочная функция
let имя переменной = (settings, ...settings) => выражение
*/

//однострочная стрелочная ф-ция
let getMessage = (text, name) => text + ', ' + name + '!';
console.log(getMessage('Hello', 'John'));

//многострочная
let getMessageV1 = (textV1, nameV1) =>{
   let messageV2 = textV1 + ', ' + nameV1 + '!';
   return messageV2;
}
console.log(getMessageV1('Hello', 'Maria'));

// ПЛАНИРОВАНИЕ setTimeout и setInterval
/*
// setTimeout - вызывает функцию один раз через опред интервал времени 
// setInterval позволяет вызывать функцию регулярно, повторяя вызов через опред инт времени

setTimeout(функция или код, задержка, параметр, ...параметр);
setInterval(функция или код, задержка, параметр, ...параметр);
*/
function showMessageV2(textV2, nameV2){
   console.log(`${textV2}, ${nameV2}!`);
}
setTimeout(showMessageV2, 3000, 'Hello', 'Grisha');

/*function showMessageV3(textV3, nameV3){
   console.log(`${textV3}, ${nameV3}!`);
}
setInterval(showMessageV3, 500, 'Hello', 'Misha');*/

