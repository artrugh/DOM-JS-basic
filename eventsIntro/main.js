// events and event listeners (event handlers)
// promt an alert message when the window is clicked

// window.addEventListener("mousedown", e => {
//     alert("Something strange is happening.");
//     console.log(e);
// })

// ---------------------------------

// Event.preventDefault()

// we use this method when we DO NOT want an HTML element to behave in its default manner
// This is the method to access the first matched element

let link = document.querySelector("a");
link.addEventListener("click", e => {
    console.log("Redirecting Stopped");
    e.preventDefault();
})

// ------------------------------

// Event.stopPropagation()
// Events flow upwards
// e.button === x (indicates the button which has been clicked);

// 0: Main button pressed, usually the left button or the un-initialized state
// 1: Auxiliary button pressed, usually the wheel button or the middle button (if present)
// 2: Secondary button pressed, usually the right button
// 3: Fourth button, typically the Browser Back button
// 4: Fifth button, typically the Browser Forward button

button2 = document.getElementById("button2");
button2.addEventListener("mousedown", e => {
    // alert("Button clicked");
    if (e.button === 0) {
        alert("incorrect button");
        e.stopPropagation();
    } else if (e.button === 1) { alert("Button clicked"); }
});

// // Event listener on the paragraph element with its logic
//
// parragraph = document.getElementById("demo")
// parragraph.addEventListener("mousedown", e => {
//     alert("paragraph clicked");
// });

//------------------------------------

// remove an event listener from an element
// In order to remove an event listener from an element, we need to call the removeEventListener
// method with the event name and the funtion name

function listener(e) {
    if (e.type === "mouseenter") {
        heading.style.color = "orangered"; //apply the orange color when you are up the element.
    } else if (e.type === "mouseleave") {
        heading.style.color = "chartreuse"; //apply the green color when you leave the element
        heading.removeEventListener("mouseleave", listener) //delete the mouse leave, which means that gonna stay orange,
        //the second time I mouseenter
    }
}

let heading = document.querySelector("h1");
//heading.addEventListener("mouseenter", listener);  //apply the function mouseenter
//heading.addEventListener("mouseleave", listener); //apply the function mouseleave

// DOMContentLoaded
// if you want to take some action once the HTML scripts have been loaded,
// you use DOMContentLoaded

function onLoad(e) {
    console.log(e);
    alert("Page has loaded")
};


//document.addEventListener("DOMContentLoaded", onLoad);

heading.addEventListener("click", e => {
    if (e.target) {
        alert("Page has loaded")
    }
})

// keyup
// The keydown and keyup events provide a code indicating which key is pressed, 
//while keypress indicates which character was entered.


// let input = document.querySelector("input");

// function onKeyUpEvent(e) {
//     console.log(e);
//     alert(e.key + " was pressed.")
// }

// input.addEventListener("keyup", onKeyUpEvent);

// Form Events

// submit
// Note that the submit event fires on the <form> element itself, and not on any <button> or <input type="submit"> inside it.
// The submit event only fires when the user clicks a submit button (<button> or <input type="submit">) in a form.
// The event is not raised when calling the form.submit() method directly.

function logSubmit(e) {
    log.textContent = `Form Submitted! Time Stamp ${e.timeStamp}`;
    e.preventDefault(); //stays it stable
    let formData = new FormData(e.target);
    console.log(formData.get("name"));
}

const log = document.getElementById("log");
const form = document.getElementById("form");
form.addEventListener("submit", logSubmit);


// reset

function logReset(event) {
    resetLog.textContent = `Form reset! Time stamp: ${event.timeStamp}`;
}
const resetLog = document.getElementById('reset-log');
const reset = document.getElementById('form');

reset.addEventListener('reset', logReset);