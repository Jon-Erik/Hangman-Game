var computerOptions = ['BACH', 'BEETHOVEN', 'BRAHMS', 'VIVALDI', 'SCHUMANN', 'SCHUBERT'];

var wins = 0;
var remainingGuesses = 16;
var currentWord = [];
var lettersGuessed = "";
var gameStarted = true;
var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log(computerChoice);

  document.onkeyup = function(event){
 	if (gameStarted === true) {
    
    var userGuess = event.key;
    console.log(userGuess);

    /*var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log(computerChoice);*/

    var wordLength = computerChoice.length;
    console.log(wordLength);

    for (i = 0; i < wordLength; i++) {
    	currentWord.push(" _");
    }

    gameStarted = false;
 	console.log(gameStarted);
} else if (gameStarted = false); {
	var userGuess = event.key;
    console.log(userGuess);


    if (computerChoice.includes(userGuess.toUpperCase())) {
    	console.log('match');
    	
    	for (var j = 0; j < computerChoice.length; j++) {
			if (computerChoice[j] === userGuess.toUpperCase()) {
			 currentWord[j] = userGuess.toUpperCase();
			 }
			}
    } else {
    	console.log('no match');

    	if (lettersGuessed.includes(userGuess)){
    		alert('You already guessed that letter.');
    	} else {
    		lettersGuessed = lettersGuessed + userGuess + " ";
    		remainingGuesses = remainingGuesses - 1;
    }
}
}

    var html = 
    	"<p>Wins: " + wins + "</p>" +
    	"<p>Current Word: <br>" + currentWord + "</p>" +
    	"<p>Remaining Guesses: " + remainingGuesses + "</p>" +
    	"<p>Letters Already Guessed: " + lettersGuessed + "</p>";

    document.querySelector('#game').innerHTML = html;

  }