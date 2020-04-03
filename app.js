const texts = ['websites', 'mock ups', 'cookies!'];

let count = 0;
let index = 0;
let currText = '';
let letter = '';

(function type() {

    if (count === texts.length) { // If you reached the end of the array
        count = 0;                // Reset the counter
    }
    currText = texts[count];      // Grab the current text based off of count
    letter = currText.slice(0, ++index); // Grab the current letter and increment each time

    document.querySelector(".typing").textContent = letter; // Add the letter
    if (letter.length === currText.length) { // If you've reached the end of that word
        count++;   // Go to next word in the texts array
        index = 0; // Reset index
    }

    setTimeout(type, 400);
}());
