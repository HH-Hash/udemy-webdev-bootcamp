
//Write function isEven() which takes a single numeric arugment
// and returns true if the numbers is even, and false otherwise

//Using console log
function isEven(x){
  	if(x % 2 === 0){
  	console.log(true);
  }
    else{
    console.log(false);
    }
}
 
// using return
function isEven(x){
  	if(x % 2 === 0){
  	return true;
  }
    else{
    return false;
    }
}
 
 //shorter version

function isEven(x){
  return x % 2 === 0;
}


 //write a function factorial()
 // which takes a single numeric argument and returns
 // the factorial of that number

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}


//write a function kebabToSnake() which takes a single
//kebab-cased string argument and returns the snake_cased version

function kebabToSnake(x){
	var y = x.replace(/-/g, "_");
	return y;
}

