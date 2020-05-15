
//1. print all numbers between -10 and 19
var firstLoop = -10;
while(firstLoop <= 19){
	console.log(firstLoop);
    firstLoop++;
}

//2. print all numbers between 10 and 40
var secondLoop = 10;
while(secondLoop <=40){
	if(secondLoop % 2 === 0){
	  console.log(secondLoop);
    }
	secondLoop++;
}

//3. print all odd numbers between 300 and 333

var thirdLoop = 300;
while(thirdLoop<=333) {
	if(thirdLoop % 2 === 1){
		console.log(thirdLoop);
	}
	thirdLoop++;
}



//4. print all numbers divisible by 5 AND 3 between 5 and 50

var fourthLoop = 5
while(fourthLoop <= 50){
	if (fourthLoop % 5 === 0 && fourthLoop % 3 === 0){
		console.log(fourthLoop);
	}
	fourthLoop++;
}

//Annoy-O-Matic loop from the other section
var answer = prompt("are we there yet");
while(answer !== "yes"){
	var answer = prompt("are we there yet");
}

alert("we made it!");


