#! /usr/bin/env node

var max = 100;

for(var i = 0; i <= max; i++) {
  if (i % 3 === 0) console.log(i, 'fizz');
  if (i % 5 === 0) console.log(i, 'buzz');
  if (i % 3 === 0 && i % 5 === 0) console.log(i, 'fizzbuzz');
}
