'use strict';

function merge(a, b) {
  var merged = [],
    aElm = a[0],
    bElm = b[0],
    i = 1,
    j = 1;

  if (a.length === 0) {
    return b;
  } else if (b.length === 0) {
    return a;
  }

  while (aElm || bElm) {
    if ((aElm && !bElm) || aElm < bElm) {
      merged.push(aElm);
      aElm = a[i++];
    } else {
      merged.push(bElm);
      bElm = b[j++];
    }
  }
  return merged;
}

var arr1 = [0,1,2,3,4,5];
var arr2 = [2,3,4,5,6,7,8,9,10];

console.log(merge(arr1, arr2));
