// import { getCitiesAndCountry } from "./functions";
import { findMatches } from "./functions";
import { displayMatches } from "./functions";
import { searchInput } from "./data";
import { suggestions } from "./data";
import { foundItem } from "./data";
// import { wholeWorld } from "./data";

//export const cities = ['berlin,DE', 'madrid,ES', 'buenos aires,AR', 'bogota,CO', 'Berna,SZ'];


//let citiesAndCodes = [];

// fetch(`city.list.json`)
//     .then(res => res.json())
//     .then(json => getCitiesAndCountry(json))
//     .catch(rej => console.log(rej));


// setTimeout(() =>
//     wholeWorld.innerText = citiesAndCodes
//     , 1000);


suggestions.addEventListener('click', e => {

    foundItem.innerText = e.target.className

})

searchInput.addEventListener("keyup", displayMatches)
