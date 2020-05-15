//important selector methods
//all of the html lives inside documentObjects it's the top level or root object


//write these to your browser console
document.url
document.links
document.body
document.head


//Selector methdos

//calling elements by id

document.getElementById("ElementsId");


//Breaking down the everything inside an element
console.dir(particularElement)


//calling elements by class name

document.getElementsByClassName("ElementsClass");


//calling element by tag name

//for example body

document.getElementsByTagName("body");


//querySelector 
//Returns ONLY THE FIRST element that matches a given CSS style selector

//select by id #highlight
//this selects the first element with id #highlight
document.guerySelector("#highlight");

//select by Class bolded
//this selects the first element with class bolded
document.querySelector(".bolded");

//select by tag h1
//this selects the first element with tag h1
document.querySelector("h1");


//querySelectorAll
//Returns a list of elements that matches a given CSS style selector
//Returns ALL the matching elements

//select by id #highlight
//this selects all elements with id #highlight
document.guerySelectorAll("#highlight");


//select by tag h1
//this selects all elements with tag h1
document.querySelectorAll("h1");

//select by class 
//this selects all with class bolded
document.querySelectorAll(".bolded");






