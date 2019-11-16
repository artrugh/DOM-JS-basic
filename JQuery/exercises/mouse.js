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


const button = document.querySelector('#button');
button.style.color = "red";

button.addEventListener('mouseenter', e => {

    console.log(e.type);

    button.innerHTML = 'Welcome, stay here forever!';
    button.style.color = 'chartreuse';
});

button.addEventListener('mouseleave', e => {
    button.innerHTML = "Don't go please!";
    button.style.color = 'orangered';
});




