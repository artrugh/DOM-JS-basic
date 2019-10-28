function delegateEvent(fromElement, eventName, targetSelector, callback) {
    // fromElement is the element in which the event is gonna be listenered
    // eventName can be 'click', 'mouseenter', 'mouseleave', etc.
    // targetSelector is the class for each list-item of the list
    // callback is a function which determine the return statement

    fromElement.addEventListener(eventName, event => {

        let targetList = [...event.currentTarget.querySelectorAll(targetSelector)];
        //geeting all the items in an array
        if (targetList.includes(event.target)) {
            // means if the class which has been writen is in the html
            callback(event)
        }
    })
};

const tracklistElem = document.querySelector('.track-list'); // the delegateEvent parent element in which the event is listener.

delegateEvent(tracklistElem, 'click', '.track', (event) => {
    console.log(`Playing ${event.target.innerText}`);

});

// could be the targetSelector taken out of the function as an argument?

function delegateEvent(fromElement, eventName, callback) {

    fromElement.addEventListener(eventName, event => {

        callback(event)

    })
};

const tracklistElem = document.querySelector('.track-list'); // the delegateEvent parent element in which the event is listener.

delegateEvent(tracklistElem, 'click', (event) => {
    alert(`Playing "${event.target.innerText}"`);

});


// // SHORT CODE WITHOUT 'TARGET SELECTOR // //

// function delegateEvent(fromElement, eventName, callback) {

//     fromElement.addEventListener(eventName, event => {

//         callback(event)

//     })
// };

// const tracklistElem = $('.track-list'); // the delegateEvent parent element in which the event is listener.
// console.log(tracklistElem);

// delegateEvent(tracklistElem, 'click', (event) => {
//     alert(`Playing "${event.target.innerText}"`);
// });