// TUTORIAL https://www.youtube.com/watch?v=0ik6X4DJKCc //

//console.dir(document);
//console.log(document.domain);
//console.log(document.title) 

//document.title = 123;

//console.log(document.doctype);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10].textContent = "Whats up?"); // it is a collection, but works like a kind of array.

//console.log(document.forms);
//console.log(document.link);
//console.log(document.image);

// GET ELEMENT BY ID //

//console.log(document.getElementById("header-title"));
let headerTitle = document.getElementById('header-title');
let header = document.getElementById("main-header");
headerTitle.textContent = 'Hola'
// it shows all the content
headerTitle.innerText = 'hallo';
console.log(headerTitle.innerText);
//console.log(headerTitle.innerText); // it shows only the content which is displayed
headerTitle.innerHTML = 'bye'; // creates a new html element as a child element

// header.style.borderBottom = "dotted 10px blue"

// // GET ELEMENT BY CLASS //

// let items = document.getElementsByClassName("list-group-item");
// //console.log(items)
// //console.log(items[1]);
// items[1].textContent = "Dunno what to say"; // change content
// //items[1].style.fontWeight = "bold";
// //items[1].style.backgroundColor = "chartreuse";
// //items.style.backgroundColor = "pink"

// //items.style.backgroundcolor = 'red'; // doesn't work because it is an array. Needs a loop.

// // [...items].map(x => (x.style.backgroundColor = "yellow"))

// //or

// // for (let i = 0; i < items.length; i += 1) {
// //     items[i].style.backgroundColor = "yellow"
// //} 


// // GET ELEMENT BY TAG NAME //

// let li = document.getElementsByTagName("li");
// //console.log(li)
// //console.log(li[3]);
// //li[1].style.backgroundColor = "purple";

// // GET ELEMENT BY QUERY SELECTOR // only for one element
// // you can use tags (ul, li. header), class(.title .content), ID(#main-title)

// let mainTitle = document.querySelector("#main-header");
// mainTitle.style.borderBottom = "solid 20px red";

// let input = document.querySelector("input");
// input.value = 'Hello Man! '

// // input.placeholder = "This is not item 5";

// let submit = document.querySelector('input[type="submit"]'); //selection the input which attribute is submit 
// submit.value = 'POST';

// let item = document.querySelector(".list-group-item"); // only select the first element with this class 
// item.style.color = "red";

// let secondItem = document.querySelector('.list-group-item:nth-child(2)'); // selecting the second child
// secondItem.style.color = "orange";

// let lastItem = document.querySelector('.list-group-item:last-child'); // selecting the last child
// secondItem.style.color = "orange";


// // GET ELEMENT BY QUERY SELECTOR ALL //

// let titles = document.querySelectorAll('.title');
// //console.log(titles);
// titles[1].textContent = 'Almost lunchtime';

// // let odd = document.querySelectorAll('li:nth-child(odd)'); // PSUDO SELECTOR
// // let even = document.querySelectorAll('li:nth-child(even)');

// // gonna need a loop
// // [...odd].map(x => x.style.backgroundColor = "red");
// // [...even].map(x => x.style.backgroundColor = "green");


// // TRAVESING THE DOM //

// let itemList = document.querySelector('#items');

// //parentNode === parentElement

// // parentNode
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.background = "yellow";
// // console.log(itemList.parentNode.parentNode.parentNode);

// // parentElement
// // console.log(itemList.parentElement);
// // itemList.parentElement.style.background = "yellow";
// //console.log(itemList.parentElement.parentElement.parentElement.style.background = "red");

// //childNodes

// //console.log(itemList.childNodes); // returns the breaks, so don't use it.

// // children
// //console.log(itemList.children);
// itemList.children[3].style.background = "green"; //select an element form an array
// //console.log(itemList.children[3].style.background); //green

// // firstChild
// //console.log(itemList.firstChild); // returns the type, and the breaks.
// //use firstElementChild
// //console.log(itemList.firstElementChild);

// //lastElementChild
// //console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = "Last Item";

// //nextSibling
// //console.log(itemList.nextSibling); //don't use it.

// //nextElementSibling
// //console.log(itemList.nextElementSibling); //span

// //previousSibling
// //console.log(itemList.previousSibling); // don't use it

// //previousElementSibling

// itemList.previousElementSibling.style.color = "blue"

// // CREATE ELEMENT //

// //create a div
// let newDiv = document.createElement("div");

// //add class
// newDiv.className = "hello";

// // add ID
// newDiv.id = "hello1"

// //add attr - setAttribute
// newDiv.setAttribute("title", "Hello Div");



// // CREATE TEXT NODE //

// let newDivText = document.createTextNode('Hello World');

// // add text to div
// newDiv.appendChild(newDivText);
// //console.log(newDiv);

// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");

// //insert in the DOM
// container.insertBefore(newDiv, h1); // first position = what gonna be insert / second position = where gonna be insert 
// newDiv.style.fontSize = "22px";


// // EVENTS //

// let button = document.getElementById("button").addEventListener('click', buttonClick);
// //('click', function buttonClick() 
// //{
// //     console.log('Button clicked');

// // });

// function buttonClick(e) {
//     //console.log('Button clicked');
//     // document.getElementById('header-title').textContent = "Changed";
//     // document.querySelector('#main').style.backgroundColor = "red";
//     // console.log(e.target.classList);
//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>' + e.target.id + '</h3>'; //print id = "button"
//     // console.log(e.type); //click
//     // console.log(e.clientX); // gives the click X position from the window/browser
//     // console.log(e.clientY); // gives the click Y position window/browser
//     // console.log(e.offsetX); // actual element
//     // console.log(e.offsetY); // actual element
//     // console.log(e.altKey);  // true or false
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);
// }

