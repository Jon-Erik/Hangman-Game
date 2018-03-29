var computerOptions = ['BACH', 'BEETHOVEN', 'BRAHMS', 'VIVALDI', 'SCHUMANN', 'SCHUBERT', 'SCRIABIN'];

var images = ["assets/images/Johann_Sebastian_Bach.jpg", "assets/images/beethoven.jpg", "assets/images/JohannesBrahms.jpg", "assets/images/vivaldi.jpg", 
              "assets/images/Schumann.jpg", "assets/images/schubert.jpg", "assets/images/scriabin.jpg"];

var captions = ["Johann Sebastian Bach, 1685-1750", "Ludwig van Beethoven, 1770-1827", "Johannes Brahms, 1833-1897", "Antonio Vivaldi, 1678-1741",
                "Robert Schumann, 1810-1856", "Franz Schubert, 1797-1828", "Alexander Scriabin, 1871-1915"]

var wins = 0;
var remainingGuesses = 10;
var currentWord = [];
var lettersGuessed = "";
var gameStarted = false;
var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
var remainingLetters = computerChoice.length;
var alreadyGuessed = "You already guessed that letter.";
var winMessage = "You win! Press any key to play again";
var winContent = false;

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
                "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//A function to display an image of a composer and caption when the user completes a word. 
var winInfo = function(i) {
    document.getElementById("image").setAttribute
    ("src", images[i]);
    document.querySelector('#caption').innerHTML = 
    captions[i];
}

//A functin to display necessary information during game play
var html = function() {
        
        var gameDisplay = "<p>Wins: " + wins + "</p>" +
        "<p>Current Word: <br>" + currentWord.join(" ") + "</p>" +
        "<p>Remaining Guesses: " + remainingGuesses + "</p>" +
        "<p>Letters Already Guessed: " + lettersGuessed + "</p>";

    document.querySelector('#game').innerHTML = gameDisplay;
}

//All events in the game are initiated by key up events.
document.onkeyup = function(event) {

    //Code until the "return" sets up the game. A word is picked randomly from an array and blanks appear on the screen along with a prompt to begin guessing letters.
    if (gameStarted === false) {
        var userGuess = event.key;

        var wordLength = computerChoice.length;

        for (i = 0; i < wordLength; i++) {
        	currentWord.push(" _");
        }

    gameStarted = true;
    
    html();

    document.getElementById("image").setAttribute("src", "assets/images/question mark head.jpg");

    document.querySelector('#caption').innerHTML = "Who could it be?";

    document.querySelector('#messagebox').innerHTML = "Press a letter to starting guessing";

    return;

    } else if (gameStarted === true); {

        var userGuess = event.key;
        console.log('user guess is ' + userGuess);

        //Checks to see if user guess is a valid letter
        if (alphabet.includes(userGuess.toUpperCase())) {

            //Checks to see if user guess is included in the randomly picked word
            if (computerChoice.includes(userGuess.toUpperCase())) {
            	console.log('match');
            	
                //Checks to see if user has already guessed the letter
                if (lettersGuessed.includes(userGuess)) {
                    document.querySelector('#messagebox').innerHTML = 
                    alreadyGuessed;

                } else {
                    lettersGuessed = lettersGuessed + userGuess + " ";

                    document.querySelector('#messagebox').innerHTML = 
                    'Match!';

                    //Checks to see where the user guess matches the letters in the word
                    for (var j = 0; j < computerChoice.length; j++) {
                    	if (computerChoice[j] === userGuess.toUpperCase()) {
                            currentWord[j] = userGuess.toUpperCase();
                            remainingLetters = remainingLetters -1;
                            console.log('remaining letters: ' + remainingLetters);
                            //Checks to see if there are any more remaining letters to be guessed. If none remain, the user scores a win and a picture of the composer is displayed.
                            if (remainingLetters === 0) {
                                wins = wins + 1;
                                document.querySelector('#messagebox').innerHTML = 
                                winMessage;
                                winContent = true;
                                if (winContent && computerChoice === 'BACH') {
                                    winInfo(0);
                                } else if (winContent && computerChoice === 'BEETHOVEN') {
                                    winInfo(1);
                                } else if (winContent && computerChoice === 'BRAHMS') {
                                    winInfo(2);
                                } else if (winContent && computerChoice === 'VIVALDI') {
                                    winInfo(3);
                                } else if (winContent && computerChoice === 'SCHUMANN') {
                                    winInfo(4);
                                } else if (winContent && computerChoice === 'SCHUBERT') {
                                    winInfo(5);
                                } else if (winContent && computerChoice === 'SCRIABIN') {
                                    winInfo(6);
                                }
                                gameStarted = false;
                                currentWord = [];
                                computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
                                console.log(computerChoice);
                                lettersGuessed = "";
                                remainingLetters = computerChoice.length;
                                break;
                            }
                        }
            		}
                }
            } else if (lettersGuessed.includes(userGuess)) {
                    document.querySelector('#messagebox').innerHTML = 
                    "You already guessed that letter.";
                        console.log('no match');
            } else {
                document.querySelector('#messagebox').innerHTML = 
                'No match. Try Again!';

                if (remainingGuesses === 1) {
                    document.querySelector('#game').innerHTML = 
                    "You ran out of guesses. </br> Game Over! Total wins: " + wins;
                    document.querySelector('#messagebox').innerHTML = 
                    "Thanks for playing! Refresh the page to start over";
                    return;
                }

                lettersGuessed = lettersGuessed + userGuess + " ";
                remainingGuesses = remainingGuesses - 1;    
            }
        } else {
        document.querySelector('#messagebox').innerHTML = 
            'Please enter a valid letter.';
        }
        html();
    }
}
