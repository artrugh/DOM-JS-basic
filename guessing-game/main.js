// // GET ELEMENTS // //

const guessingBlock = document.querySelector('#guessing-block');
const message = document.querySelector('#guess');
const input = document.querySelector('input');
const button = document.querySelector('button');
const form = document.querySelector('form');
const levels = document.querySelector('#levels')
const easy = document.querySelector('#easy');
const normal = document.querySelector('#normal');
const hard = document.querySelector('#hard');
const speedNumber = document.querySelector('#speed-number');

// // MAIN FUNTION // //

function level(submit, click, mouseover, mouseout, fromElement, breakNumber, min, max, id, chances = 0) {

    window.addEventListener('DOMContentLoaded', () => {
        // speedNumber.classList.add('running');
        speedNumber.style.fontSize = "1000%";
        speedNumber.style.transition = "6s";
        speedNumber.className = 'running'
        SpeedNumber(min, max);
    });

    //event which is listener when the levels of difficulties are clicked
    levels.addEventListener(click, e => {

        if (e.target === id) {

            // Create a number to guess between 0 and 10
            let numberToGuess = getRandomIntInclusive(min, max);
            console.log(numberToGuess, 'numberToGuess');

            //display form
            display();
            e.target.style.backgroundColor = "red";
            // when it is clicked, display the guess message
            message.innerHTML = `Guess a number between ${min} - ${max}: (You have only ${breakNumber} attempts).`;

            //code for the guess game which is listener when the form is submitted
            fromElement.addEventListener(submit, e => {

                e.preventDefault(); //stays it stable
                e.stopPropagation();


                // get the value from the input
                let number = parseInt(input.value);

                //before continuing it is important to check if there is any NaN
                let arrNum = input.value.split('');

                // check if there is some NaN 
                let NaNArr = arrNum.map(x => parseInt(x, 10)).includes(NaN);

                console.log(breakNumber - chances);


                if ((breakNumber - chances) > 1) {


                    //first check if only numbers have been written
                    if (NaNArr === true) {

                        message.textContent = `What the hell do you think you are doing? I asked for a number!`;
                        //continuing guessing
                        continuingPlaying(min, max, breakNumber, chances);

                    }

                    else if (number !== numberToGuess) {

                        //if the number is out of the range
                        if (number > max || number < min) {

                            message.textContent = `I have said that the number has to be lower than ${max} and greater than ${min}. Try it again!`;
                            //continuing guessing
                            continuingPlaying(min, max, breakNumber, chances);

                        } else {
                            chances += 1;
                            message.textContent = `Wrong!!! Try again! You have ${breakNumber - chances} attempts left.`;
                            //continuing guessing
                            continuingPlaying(min, max, breakNumber, chances);
                            console.log(chances);

                        }

                    } else {
                        //number has been guessed
                        chances += 1;
                        message.textContent = `Success: the number is indeed ${numberToGuess}. You got the number correct after ${chances} attempts.`;
                        none()
                        playingAgain();
                    }

                } else {
                    //failed
                    message.textContent = `Sorry human, but you could not guess the number in less than ${breakNumber} times. The number was ${numberToGuess}.`;
                    none()
                    playingAgain();

                }
            })
        }

    });

};

//function to get the random number which has to be guessed
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // The maximum is inclusive and the minimum is inclusive
};

// SpeedNumber function
const SpeedNumber = (min, max) => {
    setInterval(() => {
        if (speedNumber.classList.value != 'stop') {
            speedNumber.innerHTML = getRandomIntInclusive(min, max);
        }
    }, 400)
}

//display new message and speedNumber
const continuingPlaying = (min, max, breakNumber, chances) => {
    // speedNumber.classList.remove('running');
    // speedNumber.classList.add('stop'); //change the class of the speedNumber to stop its display
    speedNumber.className = 'stop'
    speedNumber.innerHTML = input.value; //display the number which was tipped
    cleaningInput()

    setTimeout(() => {
        // speedNumber.classList.remove('stop');
        // speedNumber.classList.add('running'); //change the class of the speedNumber to stop its display
        speedNumber.className = 'running'
        message.innerHTML = `Try it again, I am sure you gonna fail. Now you have only ${breakNumber - chances} attempts.`;

    }, 3000)
}

//display Playagain.
const playingAgain = () => {
    // speedNumber.classList.remove('running');
    // speedNumber.classList.add('stop'); //change the class of the speedNumber to stop its display
    speedNumber.className = 'stop'
    speedNumber.innerHTML = input.value; //display the number which was tipped
    cleaningInput()

    setTimeout(() => {
        speedNumber.className = 'running'
        message.innerHTML = `Don't you want to play again? Choose the difficulty!`;

    }, 3000)
}

//display block-none form
const display = () => {
    form.style.display = 'block';
}
const none = () => {
    form.style.display = 'none';
}

const cleaningInput = () => {
    input.value = '';
}

none();
level('submit', 'click', 'mouseover', 'mouseout', form, 7, 1, 10, easy);
level('submit', 'click', 'mouseover', 'mouseout', form, 6, 1, 20, normal);
level('submit', 'click', 'mouseover', 'mouseout', form, 3, 1, 50, hard);


