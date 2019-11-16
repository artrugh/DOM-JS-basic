// import { days as deis, months as mons } from "./arrays.js"
//data
import { days, months } from "./arrays.js"
//function
import { greetings } from "./functions.js";

const text1 = document.querySelector('h1');
const text2 = document.querySelector("h2");
const text3 = document.querySelector("marquee");

const today = days[2];
const summer = months[2];
const hallo = greetings("Colombo");

text1.innerHTML = today;
text2.innerHTML = summer;
text3.innerHTML = hallo;