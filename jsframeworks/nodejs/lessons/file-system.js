const { rejects } = require('assert')
const { attachment } = require('express/lib/response')
const fs = require('fs')
const { writeFile, appendFile } = require('fs/promises')
const { resolve } = require('path')
const path = require ('path')


//fs.mkdirSync(path.resolve(__dirname, 'dir'))
//fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {recursive:true})
/*console.log('START')
fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
   if(err){
      console.log(err)
   }
   console.log("папка создана")
})
console.log('END')*/

/*fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
   if(err){
      throw err;
   }
})*/

/*fs.writeFile(path.resolve(__dirname, 'test.txt'), '5 qwerty 7 9 10', (err) => {
   if(err){
      throw err;
   }
   console.log('файл записан')
})*/

/*fs.appendFile(path.resolve(__dirname, 'test.txt'), 'ДОБАВИТЬ ТЕКСТ', (err) => {
   if(err){
      throw err;
   }
   console.log('файл записан')
})*/
/*
const writeFileAsync = async(path, data) => {
   return new Promise((resolve,reject)=> fs.writeFile(path,data, (err)=> {
      if(err){
         return reject(err.message)
      }
      resolve()
   }))
}

const appendFileAsync = async(path, data) => {
   return new Promise((resolve,reject)=> fs.appendFile(path,data, (err)=> {
      if(err){
         return reject(err.message)
      }
      resolve()
   }))
}

const readFileAsync = async(path) => {
   return new Promise((resolve,reject)=> fs.readFile(path,{encoding:'utf-8'}, (err, data)=> {
      if(err){
         return reject(err.message)
      }
      resolve(data)
   }))
}



writeFileAsync(path.resolve(__dirname,'test.txt'), 'data')
   .then(() => appendFileAsync(path.resolve(__dirname,'test.txt'),'123'))
   .then(() => appendFileAsync(path.resolve(__dirname,'test.txt'),'4654'))
   .then(() => appendFileAsync(path.resolve(__dirname,'test.txt'),'789'))
   .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
   .then(data => console.log(data))
   .catch(err => console.log('err'))
*/





