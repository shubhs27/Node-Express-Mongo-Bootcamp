console.log(arguments);
console.log(require('module').wrapper);

// module.exports
const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(2, 7));

// exports
// const calc2 = requie('./test-module-2.js');
const { add, multiply } = require('./test-module-2');
console.log(add(2, 7));

// caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
