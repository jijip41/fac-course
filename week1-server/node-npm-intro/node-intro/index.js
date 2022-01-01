// const func = require('./add');
const { add, add2 } = require('./add');
const os = require('os');

console.log(add(4, 6));
console.log(add2(5, 7));
console.log(os.cpus());
