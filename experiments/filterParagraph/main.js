// solve the problem when it has 0.1.2.


// // GET ELEMENTS // //

const paragraphOne = document.querySelector('#paragraph-one');
const paragraphTwo = document.querySelector('#paragraph-two');

// // DECLARE VARIABLES // //

let stringOne = "There are many 1.2 variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." //text to use
let stringTwo = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.";

// // FUNCTIONS // //

// filter into arrays made by words

function fromParagraphToWords(arr, fromElement) {
    //split each sentence and delete the last empty space
    fromElement = fromElement.split(".").filter(x => x != '');

    for (i = 0; i < fromElement.length; i += 1) {
        //recover the "." and push each sentence to the array
        fromElement[i] = fromElement[i] + '.';

        if (i != 0) {
            //delete the first space.
            fromElement[i] = fromElement[i].substring(1);
        }
        // array with sentences from the string = [][][]
        // split each sentence in a new array made by words ['a','b','c']
        arr.push(fromElement[i].split(' '));

    }

};



//function which creates new element with text

function createElement(message, text, className, secondClass) {
    var newtext = document.createTextNode(message); // create the text with the argument
    var p = document.createElement('span'); //create a host new element
    p.setAttribute('id', `num${i}-${z}`); // set id
    p.classList.add(className); // set class if it's neccesary
    p.appendChild(newtext); // host the text
    text.appendChild(p); // host the new span in the html parent element
    if (arguments.length === 4) {
        p.classList.add(secondClass)
    }



    // inner each word creating a span element which its own id

    function addingFilterWords(text, fromElement, counterWords = 0, counterSentences = 0) {

        fromParagraphToWords(arr = [], fromElement);
        console.log(arr.length + " sentences in " + text.id);


        // loop into the sentences
        for (i = 0; i < arr.length; i += 1) {

            // loop into the words    
            for (z = 0; z < arr[i].length; z += 1) {

                if (z == 0 && i == 0) {
                    createElement(`${arr[i][z]} `, text, 'first-child', 'first-first');
                    //p.classList.add('first-first'); // set class for fist-first words
                    counterWords += 1;

                } else if (z == 0 && i != 0) {
                    createElement(` ${arr[i][z]} `, text, 'first-child');
                    counterWords += 1;

                } else if (i == arr.length - 1 && z == arr[i].length - 1) {

                    createElement(`${arr[i][z]} `, text, 'last-child', 'last-last');
                    var br = document.createElement('br'); //create a br
                    text.appendChild(br); // host the new span in the htm

                } else if (z == arr[i].length - 1) {
                    createElement(`${arr[i][z]} `, text, 'last-child');
                    counterWords += 1;


                } else {
                    createElement(`${arr[i][z]} `, text, 'ordinary-child');
                    counterWords += 1;
                }
            }

        } console.log(counterWords + ' words in ' + text.id);

    }
}


addingFilterWords(paragraphOne, stringOne);
addingFilterWords(paragraphOne, stringTwo);
