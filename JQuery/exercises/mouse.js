// Insert mouseenter and mouseleave
// Complete with jQuery

// Create a button that contains some text.
// When the user enters the mouse, the text of the button changes to 'Welcome! Stay here forever!'
// When the user's mouse leaves, change the text again to 'Dont go please!'.
// See images for reference

// $("button").css("font-size", "50px");

// $(document).ready(() =>
//     $("button").on("mouseenter mouseleave", (e) =>
//         e.type === "mouseenter" ?
//             $("button").css("color", "chartreuse").html("Welcome! Stay here forever!") :
//             $("button").css("color", "orangered").html("Don't go please!")
//     ));


let button = document.querySelector('button');

button.addEventListener('mouseenter mouseleave', e => {

    if (e.type === 'mouseenter') {
        button.innerHTML = 'Welcome, stay here forever!';
        button.style.color = 'chartreuse';
    } else if (e.type === 'mouseleave') {
        button.innerHTML = "Don't go please!";
        button.style.color = 'orangered';
    }
});