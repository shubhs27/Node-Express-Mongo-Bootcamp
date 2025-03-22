const eventEmitter = require('events');
const http = require('http');

// How node modules like fs, http etc. emit events internally
class Sales extends eventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
  console.log('There is a new sale!');
});

myEmitter.on('newSale', () => {
  console.log('Customer name: Shubhanan');
});

myEmitter.on('newSale', stock => {
  console.log(`Hurry! only ${stock} items left in stock!`);
});

myEmitter.emit('newSale', 9);

/////////////////////////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received');
  console.log(req.url);
  res.end('Request received');
});

server.on('close', () => {
  console.log('Server closed');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Waiting for requests...');
});
