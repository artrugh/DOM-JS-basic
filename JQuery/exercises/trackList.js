const tracklistElem = document.querySelector('.track-list');
// the delegateEvent parent element in which the event is listener.

// Function which nests an event. The type of the event is passed as an argument
// const delegateEvent = (fromElement, eventName, targetSelector, callback) => {

//     // fromElement is the element in which the event is gonna be listenered
//     // eventName can be 'click', 'mouseenter', 'mouseleave', etc.
//     // targetSelector is the class for each list-item of the list
//     // callback is a function which determine the return statement

//     fromElement.addEventListener(eventName, e => {

//         let targetList = [...e.currentTarget.querySelectorAll(targetSelector)];
//         //geeting all the items in an array
//         if (targetList.includes(e.target)) {
//             // means if the class which has been writen is in the html
//             callback(e)
//         }
//     })
// };

// //CALLING THE FUNCTION
// delegateEvent(tracklistElem, 'click', '.track', (e) => {
//     console.log(`Playing ${e.target.innerText}`);
// });

// delegateEvent(tracklistElem, 'click','.track', (e) => {
//     alert(`Playing "${e.target.innerText}"`);

// });


// // SHORT CODE WITHOUT 'TARGET SELECTOR // //
// could be the targetSelector taken out of the function as an argument?

const delegateEvent = (fromElement, eventName, callback) => {

    fromElement.addEventListener(eventName, e => {

        callback(e)

    })
};

delegateEvent(tracklistElem, 'click', (event) => {
    alert(`Playing "${event.target.innerText}"`);
});


//rewrite the code in JQ