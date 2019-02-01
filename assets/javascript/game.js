// Initial variables
var correctGuessScore = 0;
console.log(correctGuessScore)

var guessesRemaining = 5;

// Play Again Button hidden initially
document.getElementById("playAgainButton").style.display = 'none';

// Question
document.getElementById("question").innerHTML = 'Who sang Like a Virgin?';

// This function begins the game when 
// the user presses a key on their keyboard
document.onkeyup = function(userKeyStroke){

    // This determines which key the user pressed on their keyboard
    var userChoice = userKeyStroke.key;
    
    if (userChoice === "m"){
        var letterM = 'M';
        document.getElementById("letter1").innerHTML = letterM;
        console.log('user typed m');
        correctGuessScore++;
        console.log(correctGuessScore);

        if (correctGuessScore === 5){
            document.getElementById("numGuessRemainText").style.display = 'none';
            document.getElementById("userGuessRemain").style.display = 'none';

            var winText = 'You Win!';
            document.getElementById("youWinText").innerHTML = winText;
            document.getElementById("playAgainButton").style.display = 'block';
        }
    }

    else if (userChoice === "a"){
        var letterA = 'A';
        document.getElementById("letter2").innerHTML = letterA;
        document.getElementById("letter7").innerHTML = letterA;
        console.log('user typed a');
        correctGuessScore++;
        console.log(correctGuessScore)

        if (correctGuessScore === 5){
            document.getElementById("numGuessRemainText").style.display = 'none';
            document.getElementById("userGuessRemain").style.display = 'none';

            var winText = 'You Win!';
            document.getElementById("youWinText").innerHTML = winText;
            document.getElementById("playAgainButton").style.display = 'block';
        }
    }

    else if (userChoice === "d"){
        var letterD = 'D';
        document.getElementById("letter3").innerHTML = letterD;
        console.log('user typed d');
        correctGuessScore++;
        console.log(correctGuessScore)

        if (correctGuessScore === 5){
            document.getElementById("numGuessRemainText").style.display = 'none';
            document.getElementById("userGuessRemain").style.display = 'none';

            var winText = 'You Win!';
            document.getElementById("youWinText").innerHTML = winText;
            document.getElementById("playAgainButton").style.display = 'block';
        }
    }

    else if (userChoice === "o"){
        var letterO = 'O';
        document.getElementById("letter4").innerHTML = letterO;
        console.log('user typed o');
        correctGuessScore++;
        console.log(correctGuessScore)

        if (correctGuessScore === 5){
            document.getElementById("numGuessRemainText").style.display = 'none';
            document.getElementById("userGuessRemain").style.display = 'none';

            var winText = 'You Win!';
            document.getElementById("youWinText").innerHTML = winText;
            document.getElementById("playAgainButton").style.display = 'block';
        }
    }

    else if (userChoice === "n"){
        var letterN = 'N';
        document.getElementById("letter5").innerHTML = letterN;
        document.getElementById("letter6").innerHTML = letterN;
        console.log('user typed n');
        correctGuessScore++;
        console.log(correctGuessScore)

        if (correctGuessScore === 5){
            document.getElementById("numGuessRemainText").style.display = 'none';
            document.getElementById("userGuessRemain").style.display = 'none';

            var winText = 'You Win!';
            document.getElementById("youWinText").innerHTML = winText;
            document.getElementById("playAgainButton").style.display = 'block';
        }
    }

    else {
        guessesRemaining--;
        document.getElementById("userGuessRemain").innerHTML = guessesRemaining;
        console.log('user score goes down by 1 point');

        if (guessesRemaining === 0){
            document.getElementById("numGuessRemainText").style.display = 'none';
            document.getElementById("userGuessRemain").style.display = 'none';

            var correctAnswer = 'Correct answer is Madonna';
            document.getElementById("correctAnswerText").innerHTML = correctAnswer;
            document.getElementById("playAgainButton").style.display = 'block';      
        }
    }
}

function onClickReload() {
    location.reload();
}


// This code will reload a page:
// window.location.reload();

// This code will load a different page:
// window.location.href = "http://google.com";
