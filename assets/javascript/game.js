var words = [
    "seattle", "portland", "bellingham", "gresham"
];

var word = words[Math.floor(math.random() * words.length)];

var answerArray = {};
for (var i = 0; i <word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;