// Строки 
/*
Запись строк. Кавычки
Строку можно создать с помощью одинарных, двойных, обратных кавычек:
*/
let someStringOne = 'Hello!'; //Одинарные 
let someStringTwo = "Hello!"; //Двойные
let someStringThree = `Hello!`; //Обратные

console.log(someStringOne);
console.log(someStringTwo);
console.log(someStringThree);

/*
Одинарные и двойные кавычки работают, по сути, одинаково,
а если использовать обратные кавычки, то в такую строку
мы сможем вставлять произвольные выражения, обернув их в ${…}:
*/
let textHi = "Hello,";
let textAll = `${textHi} I'm the string.`;

console.log(textAll);

function someSum(a, b){
   return a + b;
}
console.log(`Сумма: ${someSum(4, 7)}`);

// Многострочная запись

let text = `Привет !
Вы на канале
Фрилансер по жизни!
`;
console.log(text);

/*
Все что заключено в любые кавычки будет
иметь тип данных строка
*/

let someStringV1 = "158";
let someNum = 158;
console.log(typeof someStringV1);
console.log(someStringV1);
console.log(typeof someNum);
console.log(someNum);

console.log(someStringV1 + someNum);

//Спецсимволы

/*
Внутри строк можно использовать ряд спецсимволов.
Все спецсимволы начинаются с обратного слеша,
\ — так называемого «символа экранирования».
Вот несколько ихз них:
*/

// Перевод строки \n
let textOneV1 = `ривет!
Вы на канале
Мастерская настроения,
меня зовут Саша
`;
console.log(textOneV1);

let textTwoV1 = "Привет!\nВы на канале\nМастерская настроения,\nменя зовут Саша";
console.log(textTwoV1);

// Табуляция (отступ) \t
let textV1 = "Привет!\n\tВы Мастерская настроения\n\t\tМеня зовут на канале,\n\t\t\tСаша";
console.log(textV1);

// Обратный слеш \\
let textV2 = "Привет! Вы на канале Фрилансер по жизни \\ IT и фриланс";
console.log(textV2);

// Кавычки \' \"
let textV3 = "Привет! Вы на канале \"Фрилансер по жизни!\"";
console.log(textV3);

// Иконки, символы UTF-16 \uКОД, UTF-32 \u{КОД}
let textV4 = "Живи, а работай в свободное время! \u00A9 \u{1F60D}";
console.log(textV4);

// Работа со строками

//Длина строки. Свойство length
let textOneV2 = "Привет!";
console.log(textOneV2.length);

// Получаем символы строки
let textV5 = "Привет!";
let firstSymbol = textV5[0];
let lasttSymbol = textV5[textV5.length - 1];
console.log(firstSymbol);
console.log(lasttSymbol);

for (const char of textV5) {
	console.log(char);
}
//Изменение строки
let textV6 = "Привет!";
textV6[6] = ".";
console.log(textV6);

//Изменение регистра
let textV7 = "Привет!";
console.log(textV7.toUpperCase());
console.log(textV7.toLowerCase());

//Поиск подстроки

// Метод str.indexOf(substr, pos)
/*
Он ищет подстроку substr в строке str, начиная с позиции pos,
и возвращает позицию, на которой располагается совпадение,
либо -1 при отсутствии совпадений.
*/
let textV8 = "Привет!";
console.log(textV8.indexOf('рив'));
console.log(textV8.indexOf('рив', 3));

// Методы includes, startsWith, endsWith
/*
Более современный метод str.includes(substr, pos) возвращает true,
если в строке есть искомая подстрока, либо false, если нет.
*/
let textV9 = "Привет!";
console.log(textV9.includes('рив'));
console.log(textV9.includes('рив', 3));

console.log(textV9.startsWith('рив'));
console.log(textV9.endsWith('!'));

// Регистр имеет значение!
let textV10 = "Привет!";
let searchText = "пР";

console.log(textV10.toLowerCase().includes(searchText.toLowerCase()));

/*
В итоге indexOf стоит использовать тогда когда нам нужна
позиция найденой подстроки.
В остальных случаях удобнее использовать includes
*/

// Получение части строки (подстроки)

/*
Метод str.slice(start [, end]) - Возвращает часть строки
от start до end (не включая).
*/
let textV11 = "Привет!";
console.log(textV11.slice(1, 2));
console.log(textV11.slice(-2, -1));
console.log(textV11.slice(1));






