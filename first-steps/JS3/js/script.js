
//var - переменная 

//области видимости 
if (true){
   let sizeLet = 50;
}

//переменная не видна за пределами блока 
console.log(sizeLet);

if (true){
   var sizeVar = 50;
}

//переменная будет видна за пределами блока
console.log(sizeVar);
