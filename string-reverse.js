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

function reverse2(str) {
  if (!str || str.length < 2) return str;

  return str.split('').reverse().join('');
}

console.log(reverse2('I like to eat bacon'));

function reverseWords(str) {
  var rev = [],
      wordLen = 0;

  for(var i = str.length - 1; i >= 0; i--) {
    if (str[i] === ' ' || i === 0) {
      rev.push(str.substr(i, wordLen + 1));
      wordLen = 0;
    } else {
      wordLen++; 
    }
  }
  return rev.join(' ');
}

console.log(reverseWords('I like to eat cheesy poofs'));
