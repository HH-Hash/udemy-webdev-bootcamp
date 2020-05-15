
var todos = ["Buy New Turtle"];




window.setTimeout(function() {
  // put all the rest of your JS code from the lecture here. This circumvents 
  // the problem with chrome browser where the html doesn't download
  // before javascript alerts and user can't see the instructions


var input = prompt("What would you like to do?");

while(input !== "quit"){
	//handle input

  if(input === "list") {
    listTodos();
  } else if(input === "new") {
	addTodo();
} else if(input === "delete"){
    deleteTodo();
}

    //ask again for new input
    input = prompt("what would you like to do?")


}

console.log("OK, YOU QUIT THE APP");

//here we define the function so the logic and loops we built is more simple because we can just relate to these with function names rather than typing all this code to above loop
function listTodos(){
	console.log("**********")
  	todos.forEach(function(todo, i){
  	  console.log(i + ": " + todo);
  	});
    console.log("**********")
}

function addTodo(){
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
}

function deleteTodo(){
  	//ask for index of todo to be deleted
	var index = prompt("Enter index of todo to delete");
	//delete that todo
	//splice(Index Number Of the item, How many to be deleted following that index number )
	// we put 1 because we only want to delete the one index entered, if we put 2 it deletes the following number also, and if 3 it deletes two of the following numbers etc...
	todos.splice(index, 1);
	console.log("Deleted Todo succesfully");
}


}, 500);