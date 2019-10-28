// DOM Tasks
// JS for book.html

// The Book List
// Create a webpage with an h1 of "My Book List". Given an array of books, example:

const books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }
];


let header = document.querySelector('header'); //header
let newUl = document.createElement('ul'); //new ul
header.appendChild(newUl); //append the ul inside the header as last element

// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
for (let i = 0; i < books.length; i++) {
    let newLi = document.createElement('p'); // create a list
    newLi.innerHTML = `${books[i].title} by ${books[i].author}. This is a p example.`; //create a text inside the list element
    newUl.appendChild(newLi); //append the li inside ul)
}

// Use a ul and li to display the books.
for (let i = 0; i < books.length; i++) { //using a loop for the books object

    let newLi = document.createElement('li'); // create a list
    newLi.innerHTML = `${books[i].title} by ${books[i].author}. This is a li example.`; //create a text inside the list element
    newUl.appendChild(newLi); //append the li inside ul

    // Add an img to each book that links to a URL of the book cover.
    //creating new link
    let newLink = document.createElement('a');
    //with the attribute href and value refering to the link
    newLink.setAttribute('href', books[i].link);

    //same for the img, but src instead of href
    let newImg = document.createElement('img');
    newImg.setAttribute('src', books[i].link);
    //and set max width of img
    newImg.style.maxWidth = '400px';

    //adding the img as child of the link
    newLink.appendChild(newImg);

    //adding each link (with img) to each li element
    newLi.appendChild(newLink);

    // Change the style of the book depending on whether you have read it or not
    if (books[i].alreadyRead === true) {
        newLi.style.backgroundColor = 'yellow';
    }
}


