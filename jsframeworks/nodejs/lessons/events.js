const Emitter = require('events');

const emitter = new Emitter();

emitter.on('message', (data,second,third) => {
   console.log('Your message is send' + data);
   console.log('Second arg' + second);
})

const MESSAGE = process.env.message || '';

if (MESSAGE){
   emitter.emit('message', MESSAGE, 123)
} else{
   emitter.emit('message', 'You are not selected message')
}


