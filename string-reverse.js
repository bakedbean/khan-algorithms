'use strict';

// could also use array
function reverse(str) {
  var reversed = '';
  for(var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverse('I like to eat ham'));
