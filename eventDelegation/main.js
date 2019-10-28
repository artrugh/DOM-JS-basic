// Event Delegation
/// Event delegation allows you to avoid adding event listeners to specific nodes.
// Instead the event listener is added to one parent

parentList = document.getElementById("parent-list");

parentList.addEventListener("click", e => {
    // e.target is the clicked element
    console.log(e.target.nodeName);

    if (e.target && e.target.nodeName == "P") {
        // List item found - Output the ID!
        console.log("List item", e.target.id.replace("post-", ""), "was clicked!")
    }
});


// // Get the parent DIV and add a click listener and a matched class

myDiv = document.getElementById("myDiv");
myDiv.addEventListener("click", e => {
    if (e.target) { e.preventDefault() }
    if (e.target.matches("a.classA")) {
        console.log("Anchor element clicked!");
    }
});

// You can focus on things over and over and the callback event will NEVER run!

document.addEventListener("focus", e => {
    console.log(e.target.name);
    // USE CAPTURE
}, true);

myDiv.style.borderBotton