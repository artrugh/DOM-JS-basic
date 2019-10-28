
let button = document.querySelector('button');
let image = document.querySelector('img');
let initial = false;

// changing the style of the picture when the button is clicked.

button.addEventListener('click', e => {
    initial = !initial;
    if (initial) {
        image.style = 'border: solid 2px yellow; padding: 10px; opacity: 60%; filter: blur(4px)';
    } else {
        image.style = 'border: none; padding: 0; opacity: 1; filter: none;';
    }
})


const circle = document.querySelector(".mouse div");

const mouseMove = e => {
    circle.style.left = `${e.pageX}px`;
    circle.style.top = `${e.pageY}px`;
}

document.addEventListener("mousemove", mouseMove);

let keys = document.querySelector(".keys");

// document.addEventListener("keypress", function(e){
//   if (e.code[3]==keys.children[0].innerText){
//     keys.children[0].style.backgroundColor="violet";
//   } else if (e.code[3]==keys.children[1].innerText){
//       keys.children[1].style.backgroundColor="violet";
//     } else if (e.code[3]==keys.children[2].innerText){
//           keys.children[2].style.backgroundColor="violet";
//         } else if (e.code[3]==keys.children[3].innerText){
//       keys.children[3].style.backgroundColor="violet";  }
// })

window.addEventListener("keydown", function () {
    let key = event.keyCode;
    console.log(event);
    switch (key) {
        case 87:
            document.querySelector(".keys button:nth-of-type(1)").style.backgroundColor = "orange";
            //console.log(event.keyCode);
            break;
        case 65:
            document.querySelector(".keys button:nth-of-type(2)").style.backgroundColor = "orange";
            //console.log(event.keyCode);
            break;
        case 83:
            document.querySelector(".keys button:nth-of-type(3)").style.backgroundColor = "orange";
            //console.log(event.keyCode);
            break;
        case 68:
            document.querySelector(".keys button:nth-of-type(4)").style.backgroundColor = "orange";
            //console.log(event.keyCode);
            break;
        default:

    }
})