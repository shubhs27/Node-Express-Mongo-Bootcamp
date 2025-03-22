const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // Approach 1
  //   fs.readFile('test-file.txt', (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  // Approach 2: Streams
  // Back pressure: response can't send the data nearly as fast as it is receiving it from the file
  //   const readable = fs.createReadStream('test-file.txt');
  //   readable.on('data', chunk => {
  //     res.write(chunk);
  //   });
  //   readable.on('end', () => {
  //     res.end();
  //   });
  //   readable.on('error', err => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end('File not found!');
  //   });

  // Approach 3
  const readable = fs.createReadStream('test-file.txt');
  readable.pipe(res); // readableSource.pipe(writeableDest)
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening...');
});
