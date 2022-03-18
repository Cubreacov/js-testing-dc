var Calculator = require("./Calculator.js");//.js is optional
var calc = new Calculator();
let addResult = calc.add(2,1);
let divideResult = calc.divide(4,2);
let output =`1 plus 2 equals ${addResult}, and 4 divided by 2 is ${divideResult}.`

console.log(output);


