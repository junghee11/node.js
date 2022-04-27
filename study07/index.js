const { odd, even } = require('./var');
const checkNumber = require('./func.js');

function checkStringOddEven(str){
    if(str.length % 2){
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddEven('hello'));