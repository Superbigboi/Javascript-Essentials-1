let fibb = n => n == 0 ? 0 : (n == 1?1: fibb(n-1) + fibb(n-2))


console.log(fibb(5)); // -> 3
console.log(fibb(7)); // -> 13
console.log(fibb(1)); // -> 13