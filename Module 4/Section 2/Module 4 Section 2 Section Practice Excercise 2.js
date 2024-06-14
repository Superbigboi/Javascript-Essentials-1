// Exercise 2: Modify the previous program so that it asks the user for the first and last number it uses instead of 100 and 0 
// (hint: use the prompt dialog).
// Check if the entered values are correct (that the initial value is greater than the final value).

let startN = Number(prompt('what number do you want to start with?'));
let endN = Number(prompt('what number do you want to end with?'));
if (!Number.isNaN(startN) && !Number.isNaN(endN) && startN>endN){
	for (let i=startN; i>=endN ; i-=10) {
	console.log(i);
	}
}
