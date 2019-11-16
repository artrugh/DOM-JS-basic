// jQuery To-Do List

// Create a to-do list
// Create an application by using html, css and vanilla js.
// The application should have an input text field inside a form and a button for submitting.
// The user should be able to write any task in the input field and then see the task as a list item below.
// Any time the form is submitted (by either hitting enter on the field, or by clicking the button) a new list item should be created with the text of the content of the input field
// The more tasks you add, the more list items appear.
// Once you have finished writing this code in vanilla JS, convert your code into jQuery.

// Bonus: Every list item should have a 'delete' button. When clicked, it should delete the list item. The 'delete' button should be created inside every list item.


// // GET ELEMENT // //

const form = document.querySelector('form');
const button = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');


// //  FUNCTIONS // //

form.addEventListener('submit', e => {

    e.preventDefault();

    //create a lis element
    let li = document.createElement('li');
    //assing a value from the event
    li.innerHTML = input.value;
    //create done button
    let done = document.createElement('button');
    done.innerHTML = 'done';
    //create delete button
    let delet = document.createElement('button');
    delet.innerHTML = 'delete';
    delet.setAttribute('id', 'delete');
    //append the child elements
    ul.appendChild(li);
    li.appendChild(done);
    li.appendChild(delet);
    // set the value empty
    input.value = '';

    //create done function setting a class to style it later
    done.addEventListener('click', () => {
        li.className = 'done';
        console.log(li);

    });
    //create delete function which remove the li
    delet.addEventListener('click', () => {

        li.parentNode.removeChild(li);
    })

});