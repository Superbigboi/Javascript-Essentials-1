// My Solution
let no = prompt("Choose a number to get the target");
no>90 && no<110 ? alert("Bingo!") : alert("Miss!");

// Course's Solution
let number = prompt("Enter a random number");
let message = (number > 90 && number < 110) ? "Bingo!": "Miss";
alert(message);