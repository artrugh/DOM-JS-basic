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
    //console.log(e);
    let li = document.createElement('li');
    li.innerHTML = input.value;
    let done = document.createElement('button');
    done.innerHTML = 'done';
    let delet = document.createElement('button');
    delet.innerHTML = 'delete';
    delet.setAttribute('id', 'delete');
    ul.appendChild(li);
    li.appendChild(done);
    li.appendChild(delet);
    input.value = '';

    done.addEventListener('click', () => {
        li.className = 'done';
        console.log(li);

    });

    delet.addEventListener('click', () => {

        li.parentNode.removeChild(li);
    })


});