
// 1. Print all numbers between -10 and 19 using for loop
for(var firstLoop = -10; firstLoop <= 19; firstLoop++){
	console.log(firstLoop);
}

// 2. Print all even numbers between 10 and 40 using for loop
for(var secondLoop = 10; secondLoop <= 40; secondLoop++){
	if(secondLoop % 2 === 0){
		console.log(secondLoop);
	}
}
// 3. Print all odd numbers between 300 and 333 using for loop
for(var thirdLoop = 300; thirdLoop <= 333; thirdLoop++){
	if(thirdLoop % 2 === 1){
		console.log(thirdLoop);
	}
}

// 3. Print all numbers divisible by 5 AND 3 between 5 and 50
for(var fourthLoop = 5; fourthLoop <= 50; fourthLoop++){
	if(fourthLoop % 5 === 0 && fourthLoop % 3 === 0){
		console.log(fourthLoop);
	}
}