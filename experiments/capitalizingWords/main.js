const searcher = document.querySelector("#searcher");
const form = document.querySelector("form");
const city = document.querySelector('p');

searcher.addEventListener('click', () => {
    searcher.value = '';
});

form.addEventListener('submit', e => {

    e.preventDefault(); //stays it stable
    // e.stopPropagation();
    newValue = searcher.value.split('');
    cityName = [];
    for (i = 0; i < newValue.length; i += 1) {

        if (i === 0) {
            cityName.push(newValue[i].toUpperCase()) //capitalize first letter
        }
        else if (newValue[i] === " " && i + 1 != newValue.length) {
            cityName.push(newValue[i]) //push the letter
            cityName.push(newValue[i + 1].toUpperCase())//capitalize first letter from second word
            i += 1; //add one to jump the letter which has already been pushed
        }

        //else if (i === newValue.length - 1 && newValue[i] === ' ') {
        //if the last letter is a space, don't push it.
        // }

        else {
            cityName.push(newValue[i]);
        }

    }
    cityName = cityName.join('');
    searcher.value = cityName;
    city.innerText = cityName;

})

