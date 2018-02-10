var computerOptions = ['BACH', 'BEETHOVEN', 'BRAHMS', 'VIVALDI', 'SCHUMANN', 'SCHUBERT'];

var wins = 0;
var remainingGuesses = 16;
var currentWord = [];
var lettersGuessed = "";
var gameStarted = true;
var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log(computerChoice);
var remainingLetters = computerChoice.length;
var alreadyGuessed = "You already guessed that letter.";
var winMessage = "You win! Click ? to play again";
var winContent = document.getElementById('messagebox').textContent;

  document.onkeyup = function(event) {
 	if (gameStarted === true) {
    
    var userGuess = event.key;
    console.log('user guess is ' + userGuess);

    var wordLength = computerChoice.length;
    console.log('word length is ' + wordLength);

    for (i = 0; i < wordLength; i++) {
    	currentWord.push(" _");
    }

    gameStarted = false;
 	console.log(gameStarted);

} else if (gameStarted === false); {
	
    var userGuess = event.key;
    console.log('user guess is ' + userGuess);


    if (computerChoice.includes(userGuess.toUpperCase())) {
    	console.log('match');
    	
        if (lettersGuessed.includes(userGuess)) {
            document.querySelector('#messagebox').innerHTML = 
            alreadyGuessed;

            remainingGuesses = remainingGuesses - 1;
        } else {
            lettersGuessed = lettersGuessed + userGuess + " ";
           
           remainingGuesses = remainingGuesses - 1; 

            document.querySelector('#messagebox').innerHTML = 
            'Match!';

        	for (var j = 0; j < computerChoice.length; j++) {
    			if (computerChoice[j] === userGuess.toUpperCase()) {
    			     currentWord[j] = userGuess.toUpperCase();
                    remainingLetters = remainingLetters -1;
                    console.log('remaining letters: ' + remainingLetters);
                    if (remainingLetters === 0) {
                        wins = wins + 1;
                        document.querySelector('#messagebox').innerHTML = 
                        winMessage;
                            if (winContent === winMessage && computerChoice === 'BACH') {
                                    document.getElementById("image").setAttribute("src", "assets/images/Johann_Sebastian_Bach.jpg");;
                            } else {

                            }
                        gameStarted === true;
    			     }
    			}
            }
        }   
    } else if (lettersGuessed.includes(userGuess)) {
    	document.querySelector('#messagebox').innerHTML = 
        "You already guessed that letter.";
            console.log('no match');
        remainingGuesses = remainingGuesses - 1;    

    } else if (userGuess === "Shift" ||
                   userGuess === "Alt" ||
                   userGuess === "Enter" ||
                   userGuess === "(" ||
                   userGuess === ")" ||
                   userGuess === "|" ||
                   userGuess === "/") {
            alert('Please enter a valid letter.');
    } else {
        document.querySelector('#messagebox').innerHTML = 
        'No match. Try Again!';

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
