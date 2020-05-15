
//*******************PROBLEM 1 ********************

//printReverse()
//Write a function printReverse() that takes an array as an argument
// and prints out the elements in the array in the reverse order
//(don't) actually reverse the array itself) So you need to use loop



function printReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}


//*******************PROBLEM 2 ********************

//isUniform()
//write a function isUniform() which takes an array as an argument
// and returns true if all elements in the array are identical

function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false
		}
	}
	return true;
}

//This is other solution to the same problem
//function isUniform(same) {
	//var first = same[0];
	//return same.every(function(element) {
		//return element === first;
	//})
//}

//this can be also done by using const
//const isUniform = arr => arr.every( v => v === arr[0] )


//*******************PROBLEM 3 ********************

//sumArray()
//Write a function sumArray() that accepts an array of numbers
//and returns the sum of all numbers in the array

function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
			total += element;
		});
	return total;
}

//other solution to the same problem

//function sumArray(array) {
  //for (
    //var
      //index = 0,              // The iterator
      //length = array.length,  // Cache the array length
     // sum = 0;                // The total amount
     // index < length;         // The "for"-loop condition
     // sum += array[index++]   // Add number on each iteration
 //);
  //return sum;
//}


//*******************PROBLEM 4 ********************

//max()
// write a function max() that accepts an array of numbers 
//and returns maximum number in the array


function max(arr) {
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
} 


