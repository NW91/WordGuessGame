// Create variables that hold references to the places in the HTML where we want to show the items
var yourLosses = document.getElementById("your-losses");
var yourWins = document.getElementById("your-wins");
var lettersGuessed = document.getElementById("letters-guessed");
var guessesLeft = document.getElementById("guesses-left");
var wordToGuess = document.getElementById("word-to-guess");

//Array to show all letters guessed
var lettersGuessed = [];

//Create an array for all the words used in the game
var words = [
    "seattle", 
    "portland", 
    "bellingham",
    "spokane",
    "tacoma", 
    "beaverton",
    "salem",
    "bend",
    "olympia"
];

//Pick random word from the city word array
var word = words[Math.floor(math.random() * words.length)];

//Array to track player's progress in the game
var answerArray = [];

//Make a for loop for the length of the word
for (var i = 0; i <word.length; i++) {
    answerArray[i] = "_";
}

//Variable integer to keep track of the length 
var remainingLetters = word.length;

//Variable to show wins, losses, and guesses
var wins = 0;
var losses = 0;
var guesses = 20;
var lettersLeft = randomPossibility.length;
console.log(lettersRemaining);

//Create function whenever the user presses a key
document.onkeyup = function (event) {
    guesses--;
    console.log(guesses);

//Shows which key is pressed
var userGuess = event.key;

//Create a logic and console.log to bank answers
if (userGuess != "Meta") {
    allGuesses.push(userGuess);
}

if (userGuess) {
    if (lettersRemaining === 0) {
        wordToGuess.innerHTML = answerArray.join(" ");
        alert("Congratulations, you have won!")
        wins++;
        yourWins.innerHTML = wins;
        console.log("wins: " + wins);
        reset();
    } else if (lettersRemaining > 0 && guesses > 1) {
        for (var j = 0; j < randomPossibility.length; j++) {
            if (userGuess === randomPossibility[j] && lettersRemaining > 0) {
                answerArray[j] = userGuess;
                lettersRemaining--;
                console.log("letters remaining: " + lettersRemaining);
                wordToGuess.innerHTML = answerArray.join(" ");
            } else {
                lettersRemaining;
            }
        }
    } else if (guesses < 1) {
        alert("Better luck next time, please try again!");
        losses++;
        yourLosses.innerHTML = losses;
        reset();
    }
    guessesLeft.innerHTML = guesses;
    lettersGuessed.innerHTML = allGuesses.join(" ");
}

//Resets the game
function reset() {

// Pick a random word
possibilities = ["seattle", "portland", "bellingham", "spokane", "tacoma", "beaverton", "salem", "bend", "olympia"];
randomPossibility = possibilities[Math.floor(Math.random() * possibilities.length)];
    console.log(randomPossibility);
    }

//answer array
answerArray = [];
for (i = 0; i < randomPossibility.length; i++) {
    answerArray[i] = ["_"];
}

}