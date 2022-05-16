const path = require('path');
/*
console.log('Склеить участки путей',path.join(__dirname,'..', '..'));
console.log(path.resolve('/first', 'second'));
const fullpath = path.resolve(__dirname,'/first', 'second.js');
console.log('парсинг пути', path.parse(fullpath))
console.log('разделитель в ОС', path.sep)
console.log('проверка на абсолютный путь', path.isAbsolute(fullpath))
console.log('file name', path.basename(fullpath))
console.log('расширение файла', path.extname(fullpath))
*/
const siteURL = 'http://localhost:5000/users?id=2554'

const url = new URL(siteURL);

console.log(url)
