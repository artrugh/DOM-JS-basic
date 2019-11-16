// let p = new Promise((resolve, reject) => { 
// resolve and reject are the status key of a promise object which is preset JSObject
//     let a = 1 + 1;
//     if (a == 2) {
//         resolve('Sucess'); //the message is in brackets
//     } else {
//         reject('Failed'); //the message is in brackets
//     }
// })


// function watchTutorialCallback(callback, errorCallback) {
//     if (!userLeft) { // if it is true or false
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if (!userWatchingGame) { // if it is true or false
//         errorCallback({
//             name: 'User Watching Game', //error.name
//             message: 'WebDevSimplified < Cat' //error.message
//         })
//     } else {
//         callback('Thumb up and Subscribe'); //message
//     }
// }

const userLeft = false;
const userWatchingGame = false;

// watchTutorialCallback((message) => { // callback
//     console.log('success:' + message);
// }, (error) => {
//     console.log(error.name + '' + error.message); //errorCallback
// });


// function watchTutorialPromise() {
//     return new Promise((resolve, reject) => {
//         if (userLeft) {
//             reject({
//                 name: 'User Left',
//                 message: ':('
//             })
//         } else if (userWatchingGame) {
//             reject({
//                 name: 'User Watching Game',
//                 message: 'WebDevSimplified < Cat' 
//             })
//         } else {
//             resolve('Thumb up and Subscribe'); //argument for the then method
//         }
//     })
// }


// watchTutorialPromise().then((message) => {
//     console.log('success: ' + message);
// }).catch((error) => {
//     console.log(error.name + '' + error.message);
// });


const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(messages => {
    console.log(messages)
});

Promise.race([ 
    //return only the first video which has been loaded
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(message => {
    console.log(message)
});


// fetch('https://jsonplaceholder.typicode.com/users') // URL
//     .then(res => res.json()) // fetching the JSON file. RES means resolve
//     .then(res => res.map(user => user.username)) // mapping the array and getting the usernamer
//     .then(names => console.log(names, typeof names, '/names: using .username/')) // typeOf(object) / the usernames means the mapping uper it. Names can be changed
// //.then(names => console.log(names, 'names: using .username')); // Only can be one argument, the first one gonna be console, next gonna be undefined

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(res => res.map(user => user["username"])) //another way to search for values in an JSON object
//     .then(usernames => console.log(usernames, typeof usernames, '/usernames: using["username"]/')); // object

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(res => res[0].address.city) // fetching an specific user, his/her addresss city
//     .then(city => console.log(city, typeof city, '/city and typeOf/')); // string

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(res => res[0].address.geo.lng)//.map((cur, index) => { if (index == 0) { return cur } }))// fetching an specific user, his/her addresss city
//     .then(geo => console.log(geo, typeof geo, '/geo-lng and typeOf/')); // string


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(res => res.map((x, index) => { if (index === 21) { return x.title } })) // fetching the title from the 21 element
//     .then(title => console.log(title, 'this is the 21title'))
//     .catch(rej => console.log('Error, with message:', rej.statusText));

// // // ASYNC FUNCTION = create a function to fetch data and call it where-whenever you want // //

// // fetch the whole API and use it later
// async function fetchUsers(url) {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
// }

// fetchUsers('https://jsonplaceholder.typicode.com/users') // call the function and use whatever you want
//     .then(data => {
//         console.log(data.map(user => { return user.username, 'fetching username using function' }));
//         console.log(data.map(user => { return user.address.city, 'fetching cities using function' }));
//     });

// async function fetchUsersTwo(url) { // a variable it the URL
//     const res = await fetch(url); // fetch the url
//     let data = await res.json(); // fetch the api in a variable
//     data = data.map(user => user.email); // map the users and get their names
//     console.log(data, "dataEmails - using asyncFunction");
// }

// fetchUsersTwo('https://jsonplaceholder.typicode.com/users');

// async function fetchUsersThree(url) {
//     const res = await fetch(url);
//     console.log(res);

//     if (!res.ok) { // if res.ok is false 
//         throw new Error(res.status); // Catch an Error 404
//     }

//     const data = await res.json(); // resolve, fetch the API
//     return data;
// }

// fetchUsersThree('https://jsonplaceholder.typicode.com/users')
//     .then(data => {
//         console.log(data.map(user => user.website));
//     })
//     .catch(err => console.log('Ooops, error', err.message)); // catch error cause res.ok is false


// fetchUsersThree('https://jsonplaceholder.typicode.com/usersZZZ') // empty API, no website on it, so catch err
//     .then(data => {

//         console.log(data.map(user => user.website));
//     })
//     .catch(err => console.log('Ooops, error', err.message)); // catch error cause res.ok is false
