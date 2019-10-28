// Task 1
// Add the necessary code to wait for the DOM
// to load to make sure that anything you manipulate in the DOM has loaded.
//You can do this either using window.onload or adding an event listener for DOMContentLoaded.

//window.onload = (e)


// function onLoad(e) {
//     console.log(e);
//     alert("Page has loaded")
// };

// document.addEventListener("DOMContentLoaded", onLoad);

// or 

// document.addEventListener("DOMContentLoaded", e => {
//     console.log(e);
//     alert("Page has loaded")
// });


// Replace the text "Change me" with "Hello World!".

let title = document.querySelector('#change_heading');
//title.innerHTML = ('Hello World');
//title.textContent = ('Hello World');
title.innerText = ('Hello World');

// When a user hovers over one of the colored boxes
// change the text to display the color that is being hovered over.

const section = document.querySelector('section');
let color = document.querySelector('.selected');
section.addEventListener('mouseover', e => {
    if (e.target) {
        //console.log(e.target.className);
        //color.style.backgroundColor = `${e.target.className}`;
        color.innerHTML = (`${e.target.className}`);
    }
});

// Create a new div element.

const div = document.createElement('div');
div.className = 'purple';
div.style.backgroundColor = `${div.className}`;
//console.log(div);


// Give your new div a class of purple and style it so that it has a background color of purple.

// Append your new div to the page to the section tag.
section.appendChild(div);

//     Task 2
// Race your divs! Create a racing game with the two divs with classes of "car1" and "car2".
//When the "Start the race!" button is pressed,
// the two cars should move across the screen until one of them is at the end of the screen
// When one of the blocks reaches the end - you should alert "winner!"

const car1 = document.querySelector('.car1');
const car2 = document.querySelector('.car2');
const button = document.querySelector('button');


button.addEventListener("click", function () {

    let random1 = Math.ceil(Math.random() * 8) + 2; //declare the duration of the animation for car1
    let random2 = Math.ceil(Math.random() * 8) + 2; //declare the duration of the animation for car2
    let lower = Math.min(random1, random2); //get the lower time, and losser.
    let winner;
    console.log(random1);
    console.log(random2);
    console.log(lower); //this value set up the setTimeOut of the winner's message;
    const race = () => {
        if (random1 != random2) {
            winner = random1 < random2 ? "car1" : "car2"; //using in the message
            console.log(winner);
            car1.style.transition = random1 + "s"
            car1.style.marginLeft = "92%";
            car2.style.transition = random2 + "s"
            car2.style.marginLeft = "92%";
        } else {
            //if both number are equal gonna need new random number and a callback;
            random1 = Math.fix(Math.random() * 8, 2);
            random2 = Math.fix(Math.random() * 8, 2);
            race();
        }
    }
    race(); // the function need to we called;
    setTimeout(() => {
        document.querySelector("h2").innerHTML = winner + " has WON!!";
    }, lower * 1000); //get the message after the cars have already finished the race;
})