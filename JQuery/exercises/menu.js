// // jQuery Drop Down

// Create a drop down menu

// Create a navbar that contains 5 list items. When the user clicks each list item, 
// a drop down menu of three items should appear. 
// In the mock up image provided, there are five movie names. 
// When the user clicks one, a drop down menu appears with the names of the three main actors.
// If another movie title is clicked, the previous one closes and the new one opens.
// Hint: You may want to create a class like 'shown' to make the dropdown list visible.
// When the link is clicked you may want to toggle this class to that specific menu item.

// Once you are finished with writing the code in vanilla JS, convert your code to Jquery.

const filmObjects = [];
//Object constructor for our films and actors
class Film {
    constructor(film, actors) {
        this.film = film;
        this.actors = actors;
        this.addToFilmArr(this);
    };
    //Method to add created object to array
    addToFilmArr = () => {
        filmObjects.push(this);
    }
}
//Create instance for film prestige
const prestige = new Film('prestige', [
    'Christian Bale',
    'Hugh Jackman',
    'Scarlett Johansen'
]);
//Create instance for film inception
const inception = new Film('inception', [
    'Leonardo Di Caprio',
    'Tom Hardy',
    'Ken Watanabe'
]);
//Create instance for film memento
const memento = new Film('memento', [
    'Guy Pearce',
    'Carrie Anne Moss ',
    'Joe Pantoliano'
]);
//Create instance for film interstellar
const interstellar = new Film('interstellar', [
    'Matthew McConaughey',
    'Anne Hathaway',
    'Jessica Chastain'
]);
//Create instance for film the dark knight
const knight = new Film('knight', [
    'Christian Bale',
    'Heath Ledger',
    'Aaron Eckhart'
]);

// // GET ELEMENTS // //

//const body = document.querySelector('body');
//const body = $('body')
const ul = document.querySelector('ul');
//const ul = $('ul');
const li = document.querySelectorAll('li');
//const li = $('li');
const nav = document.querySelector('nav');
//const nav = $('nav');
const header = document.querySelector('header');
//const header = $('header');
const container = document.querySelector('div');
//const container = $('#container');

const liArr = [...li];

const delegateDropDown = (eventName, fromElement, callback) => {
    console.log(fromElement);

    fromElement.addEventListener(eventName, () => {

        if (event.target) {
            console.log(event);
            callback(event);
        }
    });
};

const dropDown = e => {

    //Remove previously inserted actors, if any
    remove();
   
    //Add the class and get all associated children
    e.target.className = 'list-items';
    const liActors = document.querySelectorAll('.list-items ul li');
    const liActorsArr = [...liActors];

    //Grab the id which conveniently holds the same name as our film object
    let id = e.target.id;

    //Grab the object ready for use on our drop down.
    let match = filmObjects.find(film => film.film == id);

    //Insert actors into the DOM
    liActorsArr.map((x, index) => {
        x.className = 'temp';
        x.innerHTML = match.actors[index];
        x.style = 'display: block';
    });
};

const remove = () => {

    const temp = document.querySelectorAll('.temp');

    //Convert node-list into array (many more array methods than node-list methods)
    const tempArr = [...temp];

    //Remove any previously inserted actors
    tempArr.map(x => {
        x.classList.remove('temp');
        x.style.display = 'none';
    });

    //Remove class from previously clicked film titles
    liArr.map(x => x.classList.remove('list-items'));
};

delegateDropDown('click', ul, dropDown);

header.addEventListener('click', () => remove());
container.addEventListener('click', () => remove());

// rewrite the code in JQ






