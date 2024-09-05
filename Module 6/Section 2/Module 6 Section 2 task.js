// the task is to rewrite all the examples in the chapter 6.1 of Javascript Essentials


// task 1
try {
    "use strict";
	iff (true) {
	    console.log("true");
	}
} catch (error) {
    console.log("syntax error");
}

//task 2
try {
	let a = b;
} catch(error){
	console.log("an uncaught reference error, b is not defined")
}


// task 3
try{
 fun();
}catch(error){
	console.log("another reference error, fun is not defined")
}

// task 4
try{
	const someConstValue = 5;
	someConstValue = 7;
}catch(error){
	console.log("a TypeError, the value of 'someConstValue' cannot be changed")
}

// // task 5
try{
	let someNumber = 10;
	someNumber.length();
}catch(error){
	console.log("another TypeError : 'someNumber.length' is not a function")	
}

	
// // task 6
try{
	let testArray1 = Array(10);
	console.log(testArray1.length);
	let testArray2 = Array(-1);
	console.log(testArray2.length);
}catch(error){
	console.log("a RangeError : invalid array length")
}

