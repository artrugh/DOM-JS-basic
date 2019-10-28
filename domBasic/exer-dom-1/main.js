// 1.Select the section with an id of container without using querySelector.\

//console.log(document.getElementById("container"));
//console.log(document.getElementsByTagName("section"));


// 2.Select the section without an id of container using querySelector.

//let container = document.querySelector('#container');
document.querySelector("#container").style.background = "red";


// 3.Select all of the list items with a class of "second".

//let second = document.getElementsByClassName("second");
var second = document.querySelectorAll('.second');
//second.style.backgroundColor = "blue"; //doesn't work because it needs a loop
[...second].map(x => (x.style.backgroundColor = "blue"));

// 4.Select a list item with a class of third, but only the list item inside of the ol tag.

var olThird = document.querySelector("ol .third");
olThird.style.backgroundColor = 'yellow';

// 5.Give the section with an id of container the text "Hello!".

//container.textContent = "Hello!";

// 6.Add the class main to the div with a class of footer.

//let footer = document.getElementsByClassName("footer"); //doesn't work with ClassName.
let footer = document.querySelector('.footer');
footer.classList.add('main'); //add
//footer.className = 'main'; // rewrite the class
//footer.className += "main"; //footermain


//console.log(footer);
//main.createTextNode("hellooooo Word");

// 7.Remove the class main on the div with a class of footer.
footer.classList.remove("main");

// 8.Create a new li element.
let newLi = document.createElement("li");

// 9.Give the li the text "four".
newLi.textContent = 'four';

// 10.Append the li to the ul element.
let unorderedList = document.querySelector('ul');
unorderedList.appendChild(newLi);

// 11.Loop over all of the lis inside the ol tag and give them a background color of "green".
var olItems = document.querySelectorAll("ol li");
console.log(olItems);
[...olItems].map(x => x.style.backgroundColor = "green")
// var ol = document.querySelectorAll("ol");
// [...ol].map(x => x.style.backgroundColor = "green") //doesn't work

// 12.Remove the div with a class of footer.

footer.remove();

