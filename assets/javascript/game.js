var computerOptions = ['BACH', 'BEETHOVEN', 'BRAHMS', 'VIVALDI', 'SCHUMANN', 'SCHUBERT'];

var wins = 0;
var remainingGuesses = 16;
var currentWord = [];
var lettersGuessed = "";
var gameStarted = true;
var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log(computerChoice);
var remainingLetters = computerChoice.length;

  document.onkeyup = function(event) {
 	if (gameStarted === true) {
    
    var userGuess = event.key;
    console.log(userGuess);

    var wordLength = computerChoice.length;
    console.log(wordLength);

    for (i = 0; i < wordLength; i++) {
    	currentWord.push(" _");
    }

    gameStarted = false;
 	console.log(gameStarted);

} else if (gameStarted === false); {
	
    var userGuess = event.key;
    console.log(userGuess);


    if (computerChoice.includes(userGuess.toUpperCase())) {
    	console.log('match');
    	
    	for (var j = 0; j < computerChoice.length; j++) {
			if (computerChoice[j] === userGuess.toUpperCase()) {
			     currentWord[j] = userGuess.toUpperCase();
                remainingLetters = remainingLetters -1;
                console.log(remainingLetters);
                if (remainingLetters === 0) {
                    wins = wins + 1;
                    alert("You win!");
                    confirm("Click OK to play again!");
                    gameStarted === true;
			     }
			}
        }
    } else if (lettersGuessed.includes(userGuess)) {
    		alert('You already guessed that letter.');
            console.log('no match');
    } else if (userGuess === "Shift" ||
                   userGuess === "Alt" ||
                   userGuess === "Enter" ||
                   userGuess === "(" ||
                   userGuess === ")" ||
                   userGuess === "|" ||
                   userGuess === "/") {
            alert('Please enter a valid letter.');
    } else {
        lettersGuessed = lettersGuessed + userGuess + " ";
        remainingGuesses = remainingGuesses - 1;    
    }

    var html = 
    	"<p>Wins: " + wins + "</p>" +
    	"<p>Current Word: <br>" + currentWord + "</p>" +
    	"<p>Remaining Guesses: " + remainingGuesses + "</p>" +
    	"<p>Letters Already Guessed: " + lettersGuessed + "</p>";

    document.querySelector('#game').innerHTML = html;
    }
}