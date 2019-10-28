// // GET ELEMENT // //

const speedNumber = document.querySelector('p');

// // FUNCTIONS // //

//function to get the random number which has to be guessed
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // The maximum is inclusive and the minimum is inclusive
};

const SpeedNumber = (min, max) => {

    setInterval(() => {
        speedNumber.innerHTML = getRandomIntInclusive(min, max);
    }, 500)

    setTimeout(() => {
        speedNumber.style.fontSize = "1000%";
        speedNumber.style.color = 'black';
        speedNumber.style.transition = "5s";
    }, 800)
}

SpeedNumber(1, 50);
