let add = (a,b) => {
     if( !Number.isInteger(a) || !Number.isInteger(b)){
        return NaN;  
     }
     else{
          return a+b;
     }
}
let sub = (a,b) => {
    if( !Number.isInteger(a) || !Number.isInteger(b)){
        return NaN;  
     }
     else{
          return a-b;
     }
}
let mult = (a,b) => {
    if( !Number.isInteger(a) || !Number.isInteger(b)){
        return NaN;  
     }
     else{
          return a*b;
     }
}
console.log(add(12, 10)); // -> 22
console.log(sub(12, 10))
console.log(mult(12, 10.1)); // -> NaN