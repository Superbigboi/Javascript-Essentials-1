while(true){

let number1 = prompt("Enter the first number");
let number2 = prompt("Enter the second number");
let operation = prompt("Enter the operation (+-/*)");

let total;
if (number1==="Q" || number2==="Q" || operation==="Q") {
	break;
}

	number1 = Number(number1);
	number2 = Number(number2);

if(!Number.isNaN(number1) && !Number.isNaN(number2)){
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
}

	else{
		alert("error, u put something incorrectly");
	}

}
