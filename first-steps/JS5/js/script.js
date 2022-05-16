// ОПЕРАТОРЫ
// операторы делятся на:
// базовые/математические, операторы сравнения, логические операторы.

//БАЗОВЫЕ ОПЕРАТОРЫ (сложение, вычитание, деление, умножение)
//Термины: <унарный>,<бинарный>,<операнд>
// Операнд - это то к чему применяется оператор, их ещё называют аргументами.

// примеры
let userAge = 30 - 6; //Числа 30 и 6 - операнды
// либо
let userHeight = 'h' - 'y'; //Переменные h и y - операнды

// Бинарными называются операторы которые применяются к двум операндам. В нашем примере вычитание -, это бинарный оператор
let userAgeV1 = 30 - 6;
// Унарным считается оператор, который применен только к одному операнду, например:
let userCash = -800;

// В JS поддерживаются математические операторы (сложение, вычитание, умножение, деление, результат взятия остатка от деления, вовзедение в степень)

let x;
// Сложение
x = 5 + 8;
console.log(`Результат сложения: ${x}`);

// Вычитание
x = 9 - 5;
console.log(`Результат вычитания: ${x}`);

// Умножение
x = 6 * 6;
console.log(`Результат умножения: ${x}`);

// Деление
x = 18 / 3;
console.log(`Результат деления: ${x}`);

// Взятие остатка от деления %
x = 11 % 3;
console.log(`Результат остатка от деления: ${x}`);

// Возведение в степень
x = 5 ** 3;
console.log(`Результат возведения в степень: ${x}`);

// СПЕЦИАЛЬНЫЕ ВОЗМОЖНОСТИ ОПЕРАТОРОВ

// применение оператора сложения к строкам
let resultOne = "Mihail" + " " + "Shivak" + " " + "Yanovich";
console.log(resultOne);

// если в выражении есть хоть одна строка, помимо цифр, то результат будет строкой
let resultTwo = 300 + " " + "bucks";
console.log(typeof resultTwo);
console.log(resultTwo);

// казусы
let resultThree = 2 + "2";
console.log(resultThree);

// операции до сложения со строкой выполняются как обычно 
let resultFour = 45 - 23 + " dollars";
console.log(resultFour);

// Работа других операторов
let resultFive = "25" - 5;
console.log(typeof resultFive);
console.log(resultFive);

// or

let resultSix = 10 * "90";
console.log(typeof resultSix);
console.log(resultSix);

// Недопустимая операция
let resultSeven = 3 * "Hours";
console.log(typeof resultSeven);
console.log(resultSeven);

// Унарный оператор сложения

// со строками
let resultEight = +"25";
console.log(typeof resultEight);
console.log(resultEight);

// с числами
let resultNine = +10;
console.log(typeof resultNine);
console.log(resultNine);

// пример
let users = "25";
let admins = "10";
console.log(users + admins);

console.log(+users + +admins);

console.log(Number(users) + Number(admins));

// Приоритет операторов как в математике

// Оператор присвоения 
let a = 1 + 2;
let b = 2;

let result = 8 - (a = b + 3);
console.log("Результвт в скобках: " + a);
console.log("Общий результат: " + result);

// ИНКРЕМЕНТ И ДЕКРЕМЕНТ

// ИНКРЕМЕНТ ++
let addUser = 2;
addUser++;
console.log(addUser);

//Работает как addUser += 1;

// ДЕКРЕМЕНТ --
let removeUser = 2;
removeUser--;
console.log(removeUser);

// Постфиксная форма
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers); // результат 0

// Префиксная форма
let usersCounterV2 = 0;
let newUsersV2 = ++usersCounterV2;
console.log(newUsersV2); // результат 1

// Оператор запятая

/*
Предоставляет нам возможность вычислять несколько выражений, разделяя их запятой
Каждое выражение выполняется, но возвращается результат только последнего.
*/

let usersCounterV3 = (8 + 2, 19 + 1);
console.log(usersCounterV3);

// Операторы сравнения

/*
Больше: a > b
Меньше: a < b
Больше или равно: a >= b
Меньше или равно: a <= b
Равно: a == b
Не равно: a != b
Сторго равно: a === b
Cтрого не равно: a !== b
*/

/*
Операторы сравнения возвращают логический тип данных со значением true или false:
*/

console.log(2 > 1);
console.log(4 < 2);
console.log(58 == 36);
console.log(8 != 9);

//Присваиваем результат переменной
let resultV2 = 11 > 10;
console.log(resultV2);

// Сравнение строк

// Алфавитный порядок 
console.log('Б' > 'А');

// Алфавитный порядок
console.log('Скрипт' > 'Скрипка');

// Кол-во символов
console.log('Слайдер' > 'Слайд');

// Регистр
console.log('Кружка' > 'кружка');

// преобразование в число 
console.log('58' > 10);
console.log('007' == 7);

// логическое значение true становится 1, а false - 0
console.log(true == 1);
console.log(false == 0);

// оператор || (или)
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

//присвоение значения в переменную
let userName = '';
let userNickName = 'CHEL';

let user = userName || userNickName || "Без имени";
console.log(user);

// Сокращенное вычисление условие
let adminsV2 = 0;
let usersV2 = 5;
adminsV2 > usersV2 || usersV2++;
console.log(usersV2);

// оператор && (и)

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

//приоритет && > ||
console.log(1 && 0 || 2 && 1);

//Оператор ! (не)

console.log(!true);

// ! (не) имеет наивысший приоритет 

