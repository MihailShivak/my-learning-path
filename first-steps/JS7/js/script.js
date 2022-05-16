// создание объекта 
/*let userInfo = new Object(); // синтаксис "конструктор объекта"
let userInfo = {}; // синтаксис "литерал объекта"*/


// свойства объектов. Ключ + значение
let userInfo ={
   name: "John", //свойство объекта
   age: 30, //последняя запятая - (висячая). рекомендуется к использованию, т.к мы можем переставлять свойства
};

console.log(typeof userInfo);
console.log(userInfo);

// Имена свойств

// Имя из двух и более слов
let userInfoV1 = {
   nameV1: "Maria",
   ageV1: 22,
   "likes javascript": true
};
console.log(userInfoV1.nameV1);
console.log(userInfoV1["likes javascript"]);

// Вычисляемое либо передаваемое имя

// Вычисляем имя
let firstPart = "likes";
let userInfoV2 = {
   nameV2: "Gevorg",
   ageV2: 48,
   [firstPart + " javascript"]: true
};
console.log(userInfoV2["likes javascript"]);

// преимущество квадратных скобок
let key = "nameV2";
console.log(userInfoV2[key]);

// зарезервированные слова 
let userInfoV3 = {
   let: "Henry",
   for: 58,
};
console.log(userInfoV3.let);
console.log(userInfoV3.for);

// Тип данных Symbol

// Создаём символ id с описанием (именем) "id"
let id = Symbol("id");
let userInfoV4 = {
   nameV3: "Elena",
   ageV3: 30,
   [id]: "некое значение"
};
console.log(userInfoV4);

// Основные применения символов:
// 1. "Скрытие" свойства объектов
// 2. Использование системы символов
// Symbol.iterator, Symbol.toPrimitive и т.д

// Вложенность 
let userInfoV5 = {
   nameV4: "Anatoly",
   ageV4: 20,
   adress:{
      city: "Moscow",
      street: "Arbatskaya",
   }
}
console.log(userInfoV5);
console.log(userInfoV5.adress);
console.log(userInfoV5.adress.city);

// Свойства из переменной 
function makeUserInfo(nameV5,ageV5){
   return{
      nameV5: nameV5,
      ageV5: ageV5,
      // другие свойства
   };
}
let user = makeUserInfo("Egor", 32);
console.log(user);

// Изменение объекта 

//Добавление свойства
let userInfoV6 = {
   nameV6: "Fred",
}
console.log(userInfoV6);

userInfoV6.ageV6 = 15;
console.log(userInfoV6);

userInfoV6["likes cats"] = true;
console.log(userInfoV6);

userInfoV6.adressV1 = {
   cityV1: "Krasnodar",
   streetV1: "Rashpilevskaya",
};
console.log(userInfoV6);

//Удаление свойства 
let userInfoV7 = {
   nameV7: "katya",
   ageV7: 45,
   "likes box": true
}
console.log(userInfoV7);

delete userInfoV7.ageV7;
console.log(userInfoV7);

delete userInfoV7["likes box"];
console.log(userInfoV7);

let userInfoV8 = {
   nameV8: "Marina",
   ageV8: 45,
}
console.log(userInfoV8);

userInfoV8.ageV8 = 18;
console.log(userInfoV8);

// Дублирование объектов (Object.assign)
/*Object.assign(куда(объект), что(свойство #1), что(свойство #2), ...);*/

let userInfoV9 = {
   nameV9: "Billy",
   ageV9: 18,
}

let userV1 = Object.assign({}, userInfoV9); //{} - новый пустой объект

userV1.ageV9 = 8;

console.log(userInfoV9);
console.log(userV1);

// Проверка существования свойства 
let userInfoV10 = {
   nameV10: "Travis",
   ageV10: 28,
}
//console.log(userInfoV10.ageV10);

if (userInfoV10.ageV10) {
   console.log(userInfoV10.ageV10);
}

// Опциональная цепочка 
let userInfoV11 = {
   nameV11: "Nick",
   ageV11: 36,
   adressV2: {
      cityV2: "Rostov-On-Don",
      streetV2: "Pushkina",
   }
}
console.log(userInfoV11?.adressV2?.streetV2);

// Оператор in
let userInfoV12 = {
   nameV12: "Reichel",
   ageV12: 28,
   adressV3: {
      cityV3: "London",
      streetV3: "Street lights",
   }
}
if ("nameV12" in userInfoV12){
   console.log(userInfoV12.nameV12);
}

// Цикл "for..in"

//Для перебора всех свойств объекта используется for..in.
/*
for (let key in Object) {
   // тело цикла выполняется для каждоо свойства объекта
}
*/

let userInfoV13 = {
   nameV13: "Salim",
   ageV13: 42,
   adressV4: {
      cityV4: "Kabul",
      streetV4: "Freedom",
   }
}

for (let key in userInfoV13){
   // keys
   console.log(key); //name, age, adress
   // for what this keys
   console.log(userInfoV13[key]) // Salim, 42, Object{}
}

for (let key in userInfoV13.adressV4) {
      // keys
      console.log(key); //city, street
      // for what this keys
      console.log(userInfoV13.adressV4[key]) // Kabul, Freedom
}

// Методы объекта 

let userInfoV14 ={
   nameV14: "Andrey",
   ageV14: 19,
   adressV5:{ 
      cityV5: "Moscow",
      streetV5: "Kirova",
   },
   /*
   showInfo: function() {
      console.log(`${userInfoV14.nameV14}, ${userInfoV14.ageV14} лет. Адрес: г.${userInfoV14.adressV5.cityV5}, ул.${userInfoV14.adressV5.streetV5}`);
   }
   */
  showInfo(){
   console.log(`${userInfoV14.nameV14}, ${userInfoV14.ageV14} лет. Адрес: г.${userInfoV14.adressV5.cityV5}, ул.${userInfoV14.adressV5.streetV5}`);
  }

}
userInfoV14.showInfo();

// Использование "this"

let userInfoV15 ={
   nameV15: "Aleksey",
   ageV15: 31,
   adressV6:{ 
      cityV6: "Moscow",
      streetV6: "Karyakina",
   },
  showInfoV1(){
   console.log(`${this.nameV15}, ${this.ageV15} лет. Адрес: г.${this.adressV6.cityV6}, ул.${this.adressV6.streetV6}`);
  }

}
userInfoV15.showInfoV1();

// Функция конструктор 
/*
обычный синтаксис создания объекта{...} позволяет создать только один объект. 
Но зачастую нам нужно создать множество однотипных объектов, таких как пользователи, элементы меню и т.д.
Это можно сделать при помощи функции - конструктора и опреатора "new"
*/
/*
Функции - конструкторы являются обычными функциями.
но есть правила:
1. Имя функции - конструктора должно начинаться с большой буквы.
2. Функция - конструктор должна вызываться при помощи оператора "new"
*/
function UserInfo(nameV16) {
   //this - {}; Создаётся пустой объект 

   this.nameV16 = nameV16;
   this.ageV16 = 30;

   //return this; возвращает объект
}

console.log(new UserInfo("Olga"));
console.log(new UserInfo("Pasha"));









