//import { cities } from "./main";
import { suggestions } from "./data";


// export function getCitiesAndCountry(json) {
//     let cities = (json.map(x => x.name));
//     let countryCode = json.map(x => x.country);
//     for (i = 0; i < cities.length; i += 1) {
//         citiesAndCodes.push(`${cities[i]},${countryCode[i]}`)
//     }
// }
const cities = ['berlin,DE', 'madrid,ES', 'buenos aires,AR', 'bogota,CO', 'Berna,SZ'];

export function findMatches(wordToMatch, dataArray) {

    return dataArray.filter(items => {
        //To match a variable in regex, you need to create a new regex object with the variable, the flags, and assign it to a variable
        const regex = new RegExp(wordToMatch, "gi"); // new RegExp is a method use with match method

        return items.match(regex); //|| place.state.match(regex);
    })
};

export function displayMatches() {

    const matchedArray = findMatches(this.value, cities); // this is the match cities or city and is and object

    if (matchedArray.length < cities.length) {

        const html = matchedArray.map(place => {

            const regex = new RegExp(this.value, "gi"); // regex = /thisvalue/gi (this is a method use with the replace method)

            const cityName = place.replace(regex, `<span class = ${place.replace(/ /i, '-')} class = 'li'>${this.value}</span>`);
            // replacing the regex with a span element which gona we a string

            return `
        <li class = ${place.replace(/ /i, '-')}>
            <span class = ${place.replace(/ /i, '-')} class="name">${cityName}</span>
        </li>
        `}
        ).join("");

        suggestions.innerHTML = html;

    } else {
        // when the input is empty remove the suggestions
        while (suggestions.firstChild) suggestions.removeChild(suggestions.firstChild);
    }
};