var ask = require('./ask.js');

var name = ask("What's your name? ");
if (name === 'Antony') {
  console.log('Hi, Antony!');
} else if (name === 'Matt') {
  console.log('Hi, Matt!');
} else {
  console.log('Hi, stranger.');
}
