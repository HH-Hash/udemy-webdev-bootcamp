//.forEach
//javascript provides an easy built-in way of iterating
// over an array: ForEach



//side note if you write function without paranthesis it just call the function but doesn run it, when we put function() it ecexutes the named funtion

arr.forEach(someFunction)

var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(color){
//color is a placeholder, call it whatever you want
	console.log(color);
})


//lets define array to be used for evaluation of the below function

var colors = ["red", "orange", "yellow"];

//forEach(arr, func) {
	//func()
//} || forEach takes the function herein called func and calls it for every item in the array herein called arr


myForEach(colors, alert)

function myForEach(arr, func) {
	//loop through array
	for(var i = 0; i < arr.length; i++){
		//call func for each item in array
		func(arr[i]);
	}
}

// for example we can use the above function to call alert for each item in the array colors
// we just write myForEach(colors, alert)
//now this function calls for alert for all the items in the colors array







