var age = prompt("What is your age?");

if(age < 18 && age >= 0){
	console.log("Sorry, you are not old enough to enter the venue");
}
else if(age < 21){
	console.log("You can enter, but cannot drink");
}
else {
	console.log("Come on in. You can drink.");
}
if(age < 0){
	console.log("ERROR! Age can't be negative!");
}
if(age === 21){
	console.log("Happy 21st birthday!!");
}
if(age % 2 === 0){
	console.log("Your age is odd");
}
if(Number.isInteger(Math.sqrt(age)) === true){
	console.log("Perfect square!");
}
