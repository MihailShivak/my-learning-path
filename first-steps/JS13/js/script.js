// Введение в JS события

/*
Отлавливать возникновение события мы будем с помощью
специальных обработчиков.

Любому событию можно назначить обработчик, то есть функцию,
которая сработает, как только произойдет нужное нам событие.
Именно благодаря этим обработчикам JavaScript может
реагировать на действия пользователя.

Есть несколько способов назначить событию обработчик.
Сейчас о них и поговорим
*/

// Использование атрибута HTML
//<button onclick="console.log('Клик!')" type="button" class="button">Нажми на меня!</button>

// Использование DOM-объекта
const button = document.querySelector('.button');

button.onclick = function(){
   console.log('Клик!');
}
//or
function showConsole(){
   console.log('Клик!');
}
button.onclick = showConsole;
// Важно! Без круглых скобок!

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Фундаментальный недостаток описанных выше способов
назначения обработчика – невозможность повесить несколько
обработчиков на одно событие.
Каждое новое назначение обработчика перезапишет предыдущее:
*/
const button = document.querySelector('.button');

button.onclick = function () {
	console.log('Клик!');
}
button.onclick = function () {
	console.log('Клак!');
}
// Выведется только "Клак!"

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Обработчик событий addEventListener/removeEventListener
/*
Существует основной способ назначения
обработчиков при помощи специальных
методов addEventListener и removeEventListener,
которые лишены этого недостатка

element.addEventListener(event, handler[, options]);
*/
const button = document.querySelector('.button');

button.addEventListener("click", function(e){
   console.log('Клик!');
});
button.addEventListener("click", function (e) {
	console.log('Клак!');
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const button = document.querySelector('.button');

function showConsole(){
   console.log('Клик!');
   button.removeEventListener("click", showConsole);
}
button.addEventListener("click", showConsole);
//button.removeEventListener("click", showConsole);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Опции

const options = {
   "capture": false, // фаза, на которой должен сработать обработчик
   "once": true, // если true, тогда обработчик будет
	//автоматически удалён после выполнения.
   "pssive": false // если true, то указывает, что обработчик
	//никогда не вызовет preventDefault()
}

const button = document.querySelector('.button');

function showConsole(){
   console.log('Клик!');
}
button.addEventListener("click", showConsole, options);
/*
Метод addEventListener может показаться сложнее чем, скажем, onclick.
Но, из-за того что он обладает преимуществом
"прослушивания" нескольких событий,
а также учитывая тот факт что существуют события которые можно отловить
только при помощи этого метода.
В результате разработчики чаще используют именно его.
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Объект события
/*
Чтобы хорошо обработать событие, могут понадобиться детали того,
что произошло.Не просто «клик» или «нажатие клавиши»,
а также – какие координаты указателя мыши, какая клавиша
нажата и так далее.
Когда происходит событие, браузер создаёт объект события,
записывает в него детали и передаёт его в качестве
аргумента функции - обработчику.
*/
const button = document.querySelector('.button');

function showConsole(event){
   // Тип события
   console.log(event.type);
   // Объект на котором сработал обработчик
   console.log(event.target);
   // Объект к которому назначен обработчик
   console.log(event.currentTarget);
   // Положение курсора по оси X
   console.log(event.clientX);
   // Положение курсора по оси Y
   console.log(event.clientY);

   // Все детали события
   console.log(event);
}

button.addEventListener("click", showConsole);
//button.addEventListener("mouseenter", showConsole);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Всплытие и погружение
const block = document.querySelector('.block');
const blockInner = document.querySelector('.block__inner');
const blockInnerInner = document.querySelector('.block__inner-inner');
/*
Всплытие
Когда на элементе происходит событие, обработчики
сначала срабатывают на нём, потом на его родителе,
затем выше и так далее, вверх по цепочке предков.
*/
/*
Погружение
Для того чтобы что-то всплыло, оно должно сначало погрузиться :)
*/
block.addEventListener("click", function(event){
   console.log('Клик на Блок!');
   console.log(event.target);
});
blockInner.addEventListener("click", function (event){
   console.log('Клик на Блок второго уровня!');
}, {"capture": false});
blockInnerInner.addEventListener("click", function (event){
   console.log('Клик на Блок третьего уровня!');
   // Остановка всплытия
	//event.stopPropagation();
});
/*
В современной разработке стадия погружения используется очень редко,
обычно события обрабатываются во время всплытия.
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Делегирование событий
/*
Всплытие и перехват событий позволяет реализовать
один из самых важных приёмов разработки – делегирование.
*/
const button = document.querySelector('.button');

function showConsole(){
   console.log('Ура!');
}
button.forEach(buttonItem => {
   buttonItem.addEventListener("click", showConsole);
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const lesson = document.querySelector('.lesson');

function showConsole() {
   console.log('Ура!');
}
lesson.addEventListener("click", function(event){
   if (event.target.closest('.button')){
      showConsole();
   }
});

// Пример с меню
const menuBody = document.querySelector('.menu');
document.addEventListener("click", menu);
function menu(event){
   if (event.target.closest('.menu__button')){
      menuBody.classList.toggle('_active');
   }
   if (!event.target.closest('.menu')){
      menuBody.classList.remove('_active');
   }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Действия браузера по умолчанию
/*
Многие события автоматически влекут за собой действие браузера.
Например:
- Клик по ссылке инициирует переход на новый URL.
- Нажатие на кнопку «отправить» в форме – отсылку её на сервер.
- Зажатие кнопки мыши над текстом и её движение
	в таком состоянии – инициирует его выделение и т.д.

Если мы обрабатываем событие в JavaScript,
то зачастую такое действие браузера нам не нужно.
К счастью, его можно отменить.
*/
const link = document.querySelector('.link');
link.addEventListener("click", function (event){
   console.log('Наши действия');
   // отменить действие браузера (переход по ссылке)
   event.preventDefault();
});
link.onclick = function(){
   console.log('Наши действия');
   // отменить действие браузера (переход по ссылке)
	return false;
}
/*
Необязательная опция passive: true для addEventListener
сигнализирует браузеру, что обработчик не собирается выполнять
preventDefault(). Почему это может быть полезно ?
Есть некоторые события, как touchmove на мобильных
устройствах(когда пользователь перемещает палец по экрану),
которое по умолчанию начинает прокрутку, но мы можем отменить
это действие, используя preventDefault() в обработчике.
Поэтому, когда браузер обнаружит такое событие,
он должен для начала запустить все обработчики и после,
если preventDefault не вызывается нигде, он может начать прокрутку.
Это может вызвать ненужные задержки в пользовательском интерфейсе.
Опция passive: true сообщает браузеру, что обработчик
не собирается отменять прокрутку.Тогда браузер начинает её немедленно,
обеспечивая максимально плавный интерфейс, параллельно обрабатывая событие.
Для некоторых браузеров(Firefox, Chrome) опция passive по умолчанию
включена в true для таких событий, как touchstart и touchmove.
*/
const link = document.querySelector('.link');

link.addEventListener("click", function (event){
   console.log('Наши действия');
   // отменить действие браузера (переход по ссылке)
	event.preventDefault();
}, {"passive": true});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Основы событий мыши

// Типы событий мыши
/*
Мы можем разделить события мыши на две категории:
«простые» и «комплексные».
*/

// Простые события
//Самые часто используемые простые события:
/*
mousedown / mouseup - Кнопка мыши нажата / отпущена над элементом.
mouseover / mouseout - Курсор мыши появляется над элементом и уходит с него.
mousemove - Каждое движение мыши над элементом генерирует это событие.
contextmenu - Вызывается при попытке открытия контекстного меню,
					как правило, нажатием правой кнопки мыши.
					Но, заметим, это не совсем событие мыши,
					оно может вызываться и специальной клавишей клавиатуры.
*/

//Комплексные события
/*
click - Вызывается при mousedown, а затем mouseup над одним
и тем же элементом, если использовалась основная кнопка мыши.
dblclick - Вызывается двойным кликом на элементе.
Комплексные события состоят из простых, поэтому
в теории мы могли бы без них обойтись.
Но хорошо, что они существуют, потому что работать с ними очень удобно.
*/

const button = document.querySelector('.button');
button.addEventListener("mousedown", function(event){
   console.log('Нажата основная конапка мыши');
});
button.addEventListener("contextmenu", function(event){
   console.log('Вызвано контекстное меню(не основная кнопка мыши)');
});
/*
event.which = 1 - Нажата основная кнопка мыши
event.which = 2 - Нажата средняя кнопка мыши
event.which = 3 - Нажата не основная кнопка мыши
*/

// Координаты: clientX/Y, pageX/Y
const blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener("mousemove", function(event){
   blockForMouse.innerHTML = 
      `clientX - ${event.clientX} <br> clientY - ${event.clientY}`;
});

// Наведение мыши: mouseover/out, mouseenter/leave
//События mouseover/mouseout, relatedTarget
/*
Событие mouseover происходит в момент, когда курсор оказывается
над элементом, а событие mouseout – в момент,
когда курсор уходит с элемента.
*/
const blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener("mouseover", function(event){
   blockForMouse.innerHTML = `Курсор над элементом`;
});
blockForMouse.addEventListener("mouseout", function(event){
   blockForMouse.innerHTML = `Курсор уходит с элемента`;
});
/*
Эти события являются особенными, потому что у них имеется свойство
relatedTarget. Оно «дополняет» target. Когда мышь переходит
с одного элемента на другой, то один из них будет target,
а другой relatedTarget.

Для события mouseover:
event.target – это элемент, на который курсор перешёл.
event.relatedTarget – это элемент,
с которого курсор ушёл(relatedTarget → target).

Для события mouseout наоборот:
event.target – это элемент, с которого курсор ушёл.
event.relatedTarget – это элемент,
на который курсор перешёл(target → relatedTarget).
*/
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function (event){
   console.log(event.target);
   console.log(event.relatedTarget);
});
blockForMouse.addEventListener("mouseout", function (event) {
	console.log(event.target);
	console.log(event.relatedTarget);
});

// События mouseenter и mouseleave
/*
Пара важных отличий:
1) Переходы внутри элемента, на его потомки и с них, не считаются.
2) События mouseenter / mouseleave не всплывают.
*/
const blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener("mouseenter", function(event){
   console.log(`Курсор над элементом`);
});
blockForMouse.addEventListener("mouseleave", function(event){
   console.log(`Курсор уходит с элемента`);
});

//Делегирование событий наведения мыши
const blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener("mouseover", function (event){
   let target = event.target.closest('span');
   // переход не на <span> - игнорировать
   if (!target) return;
   target.style.cssText = ``;
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Клавиатура
/*
Основные события при работе с клавиатурой это:
	keydown – происходит при нажатии клавиши
	keyup – при отпускании клавиши
*/
// event.code и event.key
document.addEventListener("keydown", function(event){
   console.log(`Нажата клавиша ${event.code} (${event.key})`);
});
/*
Если пользователь работает с разными языками, то при переключении
на другой язык символ изменится с "G" на совершенно другой.
Получившееся станет новым значением event.key,
тогда как event.code останется тем же: "KeyG".
*/
document.addEventListener("keydown",function(event){
   if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)){
      console.log('Отмена действия!');
   }
});
/*
Автоповтор
При долгом нажатии клавиши возникает автоповтор: keydown срабатывает
снова и снова, и когда клавишу отпускают, то отрабатывает keyup.
Так что ситуация, когда много keydown и один keyup, абсолютно нормальна.
Для событий, вызванных автоповтором, у объекта события
свойство event.repeat равно true.
*/
document.addEventListener("keydown", function(event){
   console.log(`Нажата клавиша ${event.code} (${event.key})`);
   console.log(event.repeat);
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Прокрутка (скролл)
window.addEventListener('scroll',function(event){
   //кол-во прокрученных пикселей по вертикали
   scrollY 
   // кол-во прокрученных пикселей по горизонтали
   scrollX
   console.log(`${scrollY}px`);
});
// Предотвращение прокрутки
/*
Нельзя предотвратить прокрутку, используя event.preventDefault()
в обработчике scroll,  потому что он срабатывает после того,
как прокрутка уже произошла.

Но можно предотвратить прокрутку, используя event.preventDefault()
на событии, которое вызывает прокрутку, например,
на событии keydown для клавиш pageUp и pageDown.

Способов инициировать прокрутку много, более надёжный
способ – использовать CSS, свойство overflow: hidden;.
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// События загрузки страницы
/*
1) DOMContentLoaded – браузер полностью загрузил HTML,
	было построено DOM - дерево, но внешние ресурсы,
	такие как картинки <img> и стили, могут быть ещё не загружены.
2) load – браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.)
3) beforeunload / unload – пользователь покидает страницу.
*/
//document.readyState - cостояние загрузки
/* 
Есть три возможных значения:
"loading" – документ загружается.
"interactive" – документ был полностью прочитан.
"complete" – документ был полностью прочитан
и все ресурсы(такие как изображения) были тоже загружены.
*/
// Событие DOMContentLoaded срабатывает на объекте document
document.addEventListener("DOMContentLoaded", readyDom);
// Событие load срабатывает на объекте window
window.addEventListener("load", readyLoad);

function readyDom(){
   const image = document.querySelector('.image');
   console.log(document.readyState);
   console.log('DOM загружен!');
   console.log(image.offsetWidth);
}
function readyLoad(){
   console.log(document.readyState);
   const image = document.querySelector('.image');
   console.log('Страница загружена!');
   console.log(image.offsetWidth);
}

// Событие beforeunload срабатывает на объекте window
window.addEventListener("beforeunload", beforeUnload);

function beforeUnLoad(event){
   // Отмените событие, как указано в стандарте.
   event.preventDefault();
   // Chrome требует установки возвратного значения.
   event.retutnValue = '';
}

// Событие unload срабатывает на объекте window
window.addEventListener("unload", function(e){
   // Отправка статистики в фоновом режиме и т.д.
   this.navigator.sendBeacon(url, data)
   // https://w3c.github.io/beacon/.
});

























