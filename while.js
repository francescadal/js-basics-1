var ask = require('./ask.js');

var count = 0;
var answer = '';

while (answer !== 'Antony') {
  answer = ask("Guess my name? ");
  count = count + 1;
}
console.log("You got it in " + count + " tries!");
