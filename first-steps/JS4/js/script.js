// типы данных в js - набор характеристик, значение, которое отличает поведенеие одного типа значения от другого 

/*Js является динамически типизированным.
То есть тип данных переменной меняется динамически
в момент присвоения либо смены её значения.
А не в момент объявления. 
*/

// Преобразование типов 

// Строковое преобразование
let userAge = 58;
console.log(typeof userAge);
console.log(userAge);

userAge = String(userAge);

console.log(typeof userAge);
console.log(userAge);

let userTrue = true;
console.log(typeof userTrue);
console.log(userTrue);

userTrue = String(userTrue);

console.log(typeof userTrue);
console.log(userTrue);

let userAgeV1 = "58";
console.log(typeof userAgeV1);
console.log(userAgeV1);

userAgeV1 = Number(userAgeV1);

console.log(typeof userAgeV1);
console.log(userAgeV1);

let userAgeV2 = "58" / "2";
console.log(typeof userAgeV2);
console.log(userAgeV2);
