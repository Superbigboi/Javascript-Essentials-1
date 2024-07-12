let add = (a,b) => !Number.isInteger(a) || !Number.isInteger(b) ?  NaN : a+b
let sub = (a,b) => !Number.isInteger(a) || !Number.isInteger(b) ?  NaN : a-b
let mult = (a,b) => !Number.isInteger(a) || !Number.isInteger(b) ?  NaN : a*b
console.log(add(12, 10)); // -> 22
console.log(sub(12, 10))
console.log(mult(12, 10.1)); // -> NaN