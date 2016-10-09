'use strict';

function isPalindrome(str) {
  var i, len = str.length - 1;
  for(i = 0; i < len/2; i++) {
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('poop'));
console.log(isPalindrome('massive poop'));
