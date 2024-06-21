let number1 = Number(prompt("Enter a number"));
let number2 = Number(prompt("Enter another number"));
let operation = prompt("Enter the operation (+-/*)");

let total;

if(!Number.isNaN(number1) && !Number.isNaN(number1)){
	switch(operation){
		case "+":
			total = number1+number2;
			alert(`sum is ${total}`);
			break;
		case "-":
			total = number1-number2;
			alert(`sum is ${total}`);
			break;
		case "/":
			total = number1/number2;
			alert(`sum is ${total}`);
			break;
		case "*":
			total = number1*number2;
			alert(`sum is ${total}`);
			break;
	}
	else{
		alert("error, u put something incorrectly")
	}
}
