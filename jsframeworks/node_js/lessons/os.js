const os = require('os');
const cluster = require('cluster')

/*
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);
*/
/*
if (cluster.isMaster){
   for (let i = 0; i < os.cpus().length -2; i++) {
      cluster.fork()
   }
   cluster.on('exit', (worker, code, signal) =>{
      console.log(`воркер с pid = ${worker.process.pid} is dead`)
      if(code ===){
         cluster.fork()
      } else{
         console.log('Воркер мертв...')
      }
   })
} else{
   console.log(`воркер с pid = ${process.pid} запущен`)

   setInterval(() => {
      console.log(`воркер с pid = ${process.pid} is working`)
   }, 5000)
}
*/



