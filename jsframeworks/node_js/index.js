/*const crypto = require('crypto');


const start = Date.now()

crypto.pbkdf2('123ttt', '5', 10000, 64, 'sha512', () => {
   console.log('1 end', Date.now() - start)
})
crypto.pbkdf2('123ttt', '5', 10000, 64, 'sha512', () => {
   console.log('2 end', Date.now() - start)
})
crypto.pbkdf2('123ttt', '5', 10000, 64, 'sha512', () => {
   console.log('3 end', Date.now() - start)
})
crypto.pbkdf2('123ttt', '5', 10000, 64, 'sha512', () => {
   console.log('4 end', Date.now() - start)
})
crypto.pbkdf2('123ttt', '5', 10000, 64, 'sha512', () => {
   console.log('5 end', Date.now() - start)
})

console.log(start)*/
const PORT = process.env.PORT || 5000;
const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const jsonParser = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');
const mongoose = require('mongoose');

const app = new Application();

app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));

app.addRouter(userRouter);

const start = async () => {
   try {
      await mongoose.connect('mongodb+srv://Mi:1691@cluster0.1cxbv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
      app.listen(PORT,() => console.log(`Server started on PORT ${PORT}`))
   } catch(e) {
      console.log(e)
   }
}

start()