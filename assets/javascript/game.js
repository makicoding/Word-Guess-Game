// Initial guesses remaining
var guessesRemaining = 15;

// This function begins the game when 
// the user presses a key on their keyboard
document.onkeyup = function(userKeyStroke){

    // This determines which key the user pressed on their keyboard
    var userChoice = userKeyStroke.key;
    
    if (userChoice === "m"){
        var letterM = 'M';
        document.getElementById("letter1").innerHTML = letterM;
        console.log('user typed m');
    }

    else if (userChoice === "a"){
        var letterA = 'A';
        document.getElementById("letter2").innerHTML = letterA;
        document.getElementById("letter7").innerHTML = letterA;
        console.log('user typed a');
    }

    else if (userChoice === "d"){
        var letterD = 'D';
        document.getElementById("letter3").innerHTML = letterD;
        console.log('user typed d');
    }

    else if (userChoice === "o"){
        var letterO = 'O';
        document.getElementById("letter4").innerHTML = letterO;
        console.log('user typed o');
    }

    else if (userChoice === "n"){
        var letterN = 'N';
        document.getElementById("letter5").innerHTML = letterN;
        document.getElementById("letter6").innerHTML = letterN;
        console.log('user typed n');
    }

    else {
        guessesRemaining--;
        document.getElementById("userGuessesRemaining").innerHTML = guessesRemaining;
        console.log('user score goes down by 1 point');
    }
}
