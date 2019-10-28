// About Me
// js from me.html

// In JavaScript, change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-serif";
ul = document.getElementsByTagName('ul');
li = document.getElementsByTagName('li');
console.log(li.length);


// In JavaScript, replace each of the spans (nickname, favorites, hometown) with your own information.
let span = document.querySelectorAll('li span') // must use the querySelectorAll 

//most simple way using span

// span[0].innerHTML = "Robert"; //nickname
// span[1].innerHTML = "Soccer"; //favorites
// span[2].innerHTML = "Rio"; //hometown
//console.log(span[0].id);

// using an array

// const personalInfo = ['Robert', 'Soccer', 'Rio'];
// for (let i = 0; i < personalInfo.length; i += 1) {
//     span[i].innerHTML = personalInfo[i]; //create a text inside the list element 
// }

// using an object

const personalInfo = {
    nickname: "Robert",
    favorites: "Soccer",
    hometown: "Rio",
};

for (let i in personalInfo) {
    console.log(i, personalInfo[i]);

    for (let z = 0; z < li.length; z += 1) {
        console.log(z);

        if (i === span[z].id) {
            span[z].innerHTML = personalInfo[i]; //create a text inside the list element using[i]
        }
    }
};

[...li].map(x => { //remember the [...x]
    x.className = 'list-item'; // Iterate through each li and change the class to "list-item".
    // x.classList.add("list-item"); 
    x.setAttribute("style", "color: red"); // Add a style tag that sets a rule for .list-item to make the color red.
    //x.style.color = "red"
});

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
const img = document.createElement('img');
img.setAttribute('src', 'https://metalheadzone.com/led-zeppelins-robert-plant-slams-a-famous-rapper-for-political-reason/')
document.body.appendChild(img);
