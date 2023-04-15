const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('click', () => {
  console.log('button clicked');
});
myEmitter.emit('click', new Error('whoops!'));