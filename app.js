const moment = require('moment');
console.log('Hello, Demo!');
console.log("This a new change");
const date = moment().format('LL');
console.log(date);

module.exports = {
    add: (a,b) => a+b,
    sub: (a,b) => a-b,
    multiply:(a,b) => a*b,
    divide: (a,b) => a/b

}