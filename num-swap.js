'use strict';

function swapNum(a, b) {
  b = b - a;
  a = a + b;
  b = a - b;
  return [a, b];
}

console.log(swapNum(2, 3))
