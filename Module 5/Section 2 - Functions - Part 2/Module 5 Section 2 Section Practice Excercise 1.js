let numbers = [50, 10, 40, 30, 20];
let compareNumbers = (a, b) => {
     let retVal = 0;
     if (a < b) retVal = 1;
     else retVal = -1;  
     return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]


// use an anonymous function;
// use an arrow function;
// consider skipping the if statement.


// actual solution ⬇️
// numbers.sort((a, b) => a - b);
