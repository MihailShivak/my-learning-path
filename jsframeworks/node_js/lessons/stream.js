// Readable - чтение
// Writable - запись
// Duplex - смешанное
// Transform - Duplex, но может изменить данные по мере чтения


const fs = require('fs')
const path = require('path')
/*
const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))

stream.on('data',(chunk)=>{
   console.log(chunk)
})
stream.on('end',() => console.log('закончить читать'))
stream.on('open',() => console.log('начать читать'))
stream.on('error', (e) => console.log(e))
*/
/*
const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))
for(let i = 0; i < 20; i++){
   writableStream.write(i + '\n');
}
writableStream.end()
writableStream.close()
writableStream.destroy()
writableStream.on('error')
*/
/*
const http = require('http');

http.createServer((req,res)=>{
   //req - readable
   //res - writable
   const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
   stream.pipe(res)
})
*/














