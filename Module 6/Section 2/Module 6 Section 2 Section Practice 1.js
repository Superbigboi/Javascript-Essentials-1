// Write your own div function that will take two call arguments and return the result of dividing the first argument by the second.
//  In JavaScript, the result of dividing by zero is the value Infinity (or -Infinity, if we try to divide a negative number). Change this. 
//  If you pass 0 as the second argument, your function should throw a RangeError exception with the appropriate message. Prepare a test call
//   of the function for both valid division and division by zero.

function div(a,b){
    if (b == 0){
        throw new RangeError("Can't divide by zero");
    }
return a/b;
}

console.log(div(9, 3));
console.log(div(9, 0));
