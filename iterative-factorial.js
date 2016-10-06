var factorial = function(n) {
    var result = 1;
    
    for(var i = 1; i <= n; i++) {
      result = result * i;
    }

    return result;
};

console.log("The value of 5! should be " + 5*4*3*2*1);
console.log("The value of 5! is " + factorial(5));
console.log("The value of 0! should be 1");
console.log("The value of 0! is " + factorial(0));

//Program.assertEqual(factorial(5), 120);
//Program.assertEqual(factorial(0), 1);
