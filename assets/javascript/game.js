// ASSIGN VALUES TO EACH GAME
var gameOptions = ["game2"];
//, "game2", "game3", "game4", "game5"


// USE RANDOM NUMBER GENERATOR TO PICK A GAME
var gamePick = gameOptions[Math.floor(Math.random() * gameOptions.length)];

/*

// THIS CODE NEEDS WORK
// GAME 1
if (gamePick === "game1") {

    // Initial variables
    var correctLetter01 = false;
    var correctLetter02 = false;
    var correctLetter03 = false;

    var x = 0

    if (correctLetter01 = true){
        x = 1;
        console.log(x);
    }

    var y = 0

    if (correctLetter02 = true){
        y = 1;
        console.log(y);
    }

    var z = 0

    if (z = true){
        y = 1;
        console.log(y);
    }

    var winningScore = x + y + z;


    if (winningScore = 3){
        document.getElementById("numGuessRemainText").style.display = 'none';
        document.getElementById("userGuessRemain").style.display = 'none';

        var winText = 'You Win!';
        document.getElementById("youWinText").innerHTML = winText;
        document.getElementById("playAgainButton").style.display = 'block';


    var guessesRemaining = 9;

    // Letter placeholders that are not necessary 
    // for this game and therefore removed
    document.getElementById("letter04").style.display = 'none';
    document.getElementById("letter05").style.display = 'none';
    document.getElementById("letter06").style.display = 'none';
    document.getElementById("letter07").style.display = 'none';
    document.getElementById("letter08").style.display = 'none';
    document.getElementById("letter09").style.display = 'none';
    document.getElementById("letter10").style.display = 'none';
    document.getElementById("letter11").style.display = 'none';
    document.getElementById("letter12").style.display = 'none';
    document.getElementById("letter13").style.display = 'none';
    document.getElementById("letter14").style.display = 'none';
    document.getElementById("letter15").style.display = 'none';

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
            document.getElementById("letter01").innerHTML = letterM;
            console.log('user typed m');
            correctLetter01 = true;
            console.log(correctLetter01);
            }
        }

        else if (userChoice === "a"){
            var letterA = 'A';
            document.getElementById("letter02").innerHTML = letterA;
            document.getElementById("letter07").innerHTML = letterA;
            console.log('user typed a');
            correctLetter02 = true;
            console.log(correctLetter02);
            }
        }

        else if (userChoice === "d"){
            var letterD = 'D';
            document.getElementById("letter03").innerHTML = letterD;
            console.log('user typed d');
            correctLetter03 = true;
            console.log(correctLetter03);
            }
        }
    }

    function onClickReload() {
        location.reload();
    }
}

*/



// CODE I AM WORKING ON NOW

// GAME 2

if (gamePick === "game2") {

            // Initial variables
            var correctGuess1 = false;
            console.log(correctGuess1)
        
            var correctGuess2 = false;
            console.log(correctGuess2)
        
            var correctGuess3 = false;
            console.log(correctGuess2)
        
            var correctGuess4 = false;
            console.log(correctGuess2)
        
            var correctGuess5 = false;
            console.log(correctGuess2)
        
        
            var correctGuessScore = false;

    
    var guessesRemaining = 9;
    
    // Letter placeholders that are not necessary 
    // for this game and therefore removed
    document.getElementById("letter08").style.display = 'none';
    document.getElementById("letter09").style.display = 'none';
    document.getElementById("letter10").style.display = 'none';
    document.getElementById("letter11").style.display = 'none';
    document.getElementById("letter12").style.display = 'none';
    document.getElementById("letter13").style.display = 'none';
    document.getElementById("letter14").style.display = 'none';
    document.getElementById("letter15").style.display = 'none';
    
    // Play Again Button hidden initially
    document.getElementById("playAgainButton").style.display = 'none';
    
    // Question
    document.getElementById("question").innerHTML = 'THIS IS GAME 2: Which artist sang Like A Virgin?';
    
    // This function begins the game when 
    // the user presses a key on their keyboard
    document.onkeyup = function(userKeyStroke){
                
        // This determines which key the user pressed on their keyboard

        

        var userChoice = userKeyStroke.key;
        
        if (userChoice === "m"){
            var letterM = 'M';
            document.getElementById("letter01").innerHTML = letterM;
            console.log('user typed m');
            correctGuess1 = true;
            console.log(correctGuess1);
        }
    
        else if (userChoice === "a"){
            var letterA = 'A';
            document.getElementById("letter02").innerHTML = letterA;
            document.getElementById("letter07").innerHTML = letterA;
            console.log('user typed a');
            correctGuess2 = true;
            console.log(correctGuess2)
        }
    
        else if (userChoice === "d"){
            var letterD = 'D';
            document.getElementById("letter03").innerHTML = letterD;
            console.log('user typed d');
            correctGuess3 = true;
            console.log(correctGuess3)
        }
    
        else if (userChoice === "o"){
            var letterO = 'O';
            document.getElementById("letter04").innerHTML = letterO;
            console.log('user typed o');
            correctGuess4 = true;
            console.log(correctGuess4)
        }
    
        else if (userChoice === "n"){
            var letterN = 'N';
            document.getElementById("letter05").innerHTML = letterN;
            document.getElementById("letter06").innerHTML = letterN;
            console.log('user typed n');
            correctGuess5 = true;
            console.log(correctGuess5)
        } 
    

        if ((userChoice === 'b') || (userChoice === 'c') ||) {



        }


var wrongEntry = [];
        wrongEntry.push(userChoice.toUpperCase() + " ");


        document.getElementById("lag01").innerHTML = wrongEntry;



        else {
            guessesRemaining--;
            document.getElementById("userGuessRemain").innerHTML = guessesRemaining;
            console.log('user score goes down by 1 point');
            
            if (userChoice === "b"){
            var letterB = 'B';
            document.getElementById("lag01").innerHTML = letterB;
            }
            
            else if (userChoice === "c"){
            var letterC = 'C';
            document.getElementById("lag02").innerHTML = letterC;
            }

            else if (userChoice === "e"){
            var letterE = 'E';
            document.getElementById("lag03").innerHTML = letterE;
            }

            else if (userChoice === "f"){
            var letterF = 'F';
            document.getElementById("lag04").innerHTML = letterF;
            }

            else if (userChoice === "g"){
            var letterG = 'G';
            document.getElementById("lag05").innerHTML = letterG;
            }

            else if (userChoice === "h"){
            var letterH = 'H';
            document.getElementById("lag06").innerHTML = letterH;
            }

            else if (userChoice === "i"){
            var letterI = 'I';
            document.getElementById("lag07").innerHTML = letterI;
            }

            else if (userChoice === "j"){
            var letterJ = 'J';
            document.getElementById("lag08").innerHTML = letterJ;
            }

            else if (userChoice === "k"){
            var letterK = 'K';
            document.getElementById("lag09").innerHTML = letterK;
            }

            else if (userChoice === "l"){
            var letterL = 'L';
            document.getElementById("lag10").innerHTML = letterL;
            }

            else if (userChoice === "p"){
            var letterP = 'P';
            document.getElementById("lag11").innerHTML = letterP;
            }

            else if (userChoice === "q"){
            var letterQ = 'Q';
            document.getElementById("lag12").innerHTML = letterQ;
            }

            else if (userChoice === "r"){
            var letterR = 'R';
            document.getElementById("lag13").innerHTML = letterR;
            }

            else if (userChoice === "s"){
            var letterS = 'S';
            document.getElementById("lag14").innerHTML = letterS;
            }

            else if (userChoice === "t"){
            var letterT = 'T';
            document.getElementById("lag15").innerHTML = letterT;
            }

            else if (userChoice === "u"){
            var letterU = 'U';
            document.getElementById("lag16").innerHTML = letterU;
            }

            else if (userChoice === "v"){
            var letterV = 'V';
            document.getElementById("lag17").innerHTML = letterV;
            }

            else if (userChoice === "w"){
            var letterW = 'W';
            document.getElementById("lag18").innerHTML = letterW;
            }

            else if (userChoice === "x"){
            var letterX = 'X';
            document.getElementById("lag19").innerHTML = letterX;
            }

            else if (userChoice === "y"){
            var letterY = 'Y';
            document.getElementById("lag20").innerHTML = letterY;
            }

            else if (userChoice === "z"){
            var letterZ = 'Z';
            document.getElementById("lag21").innerHTML = letterZ;
            }
        }

        if (correctGuess1 && correctGuess2 && correctGuess3 && correctGuess4 && correctGuess5){
            correctGuessScore = true;
            if (correctGuessScore === true){
                document.getElementById("numGuessRemainText").style.display = 'none';
                document.getElementById("userGuessRemain").style.display = 'none';
        
                var winText = 'You Win!';
                document.getElementById("youWinText").innerHTML = winText;
                document.getElementById("playAgainButton").style.display = 'block';
            }
        }
        
        // clean this up slightly so that I can use true false statements like the correctGuess Score
        if (guessesRemaining === 0){
            document.getElementById("numGuessRemainText").style.display = 'none';
            document.getElementById("userGuessRemain").style.display = 'none';
    
            var correctAnswer = 'Correct answer is Madonna';
            document.getElementById("correctAnswerText").innerHTML = correctAnswer;
            document.getElementById("playAgainButton").style.display = 'block';      
        }

    }





        

    
            
    
    function onClickReload() {
        location.reload();
    }
}



// THIS CODE NOW WORKS WITH THE HELP OF HARRISON
// GAME 2
/*
if (gamePick === "game2") {

            // Initial variables
            var correctGuess1 = false;
            console.log(correctGuess1)
        
            var correctGuess2 = false;
            console.log(correctGuess2)
        
            var correctGuess3 = false;
            console.log(correctGuess2)
        
            var correctGuess4 = false;
            console.log(correctGuess2)
        
            var correctGuess5 = false;
            console.log(correctGuess2)
        
        
            var correctGuessScore = false;

    
    var guessesRemaining = 9;
    
    // Letter placeholders that are not necessary 
    // for this game and therefore removed
    document.getElementById("letter08").style.display = 'none';
    document.getElementById("letter09").style.display = 'none';
    document.getElementById("letter10").style.display = 'none';
    document.getElementById("letter11").style.display = 'none';
    document.getElementById("letter12").style.display = 'none';
    document.getElementById("letter13").style.display = 'none';
    document.getElementById("letter14").style.display = 'none';
    document.getElementById("letter15").style.display = 'none';
    
    // Play Again Button hidden initially
    document.getElementById("playAgainButton").style.display = 'none';
    
    // Question
    document.getElementById("question").innerHTML = 'THIS IS GAME 2: Which artist sang Like A Virgin?';
    
    // This function begins the game when 
    // the user presses a key on their keyboard
    document.onkeyup = function(userKeyStroke){
                
        // This determines which key the user pressed on their keyboard
        var userChoice = userKeyStroke.key;
        
        if (userChoice === "m"){
            var letterM = 'M';
            document.getElementById("letter01").innerHTML = letterM;
            console.log('user typed m');
            correctGuess1 = true;
            console.log(correctGuess1);
        }
    
        else if (userChoice === "a"){
            var letterA = 'A';
            document.getElementById("letter02").innerHTML = letterA;
            document.getElementById("letter07").innerHTML = letterA;
            console.log('user typed a');
            correctGuess2 = true;
            console.log(correctGuess2)
        }
    
        else if (userChoice === "d"){
            var letterD = 'D';
            document.getElementById("letter03").innerHTML = letterD;
            console.log('user typed d');
            correctGuess3 = true;
            console.log(correctGuess3)
        }
    
        else if (userChoice === "o"){
            var letterO = 'O';
            document.getElementById("letter04").innerHTML = letterO;
            console.log('user typed o');
            correctGuess4 = true;
            console.log(correctGuess4)
        }
    
        else if (userChoice === "n"){
            var letterN = 'N';
            document.getElementById("letter05").innerHTML = letterN;
            document.getElementById("letter06").innerHTML = letterN;
            console.log('user typed n');
            correctGuess5 = true;
            console.log(correctGuess5)
        } 
    
        else {
            guessesRemaining--;
            document.getElementById("userGuessRemain").innerHTML = guessesRemaining;
            console.log('user score goes down by 1 point');
            
            if (userChoice === "b"){
            var letterB = 'B';
            document.getElementById("lag01").innerHTML = letterB;
            }
            
            else if (userChoice === "c"){
            var letterC = 'C';
            document.getElementById("lag02").innerHTML = letterC;
            }

            else if (userChoice === "e"){
            var letterE = 'E';
            document.getElementById("lag03").innerHTML = letterE;
            }

            else if (userChoice === "f"){
            var letterF = 'F';
            document.getElementById("lag04").innerHTML = letterF;
            }

            else if (userChoice === "g"){
            var letterG = 'G';
            document.getElementById("lag05").innerHTML = letterG;
            }

            else if (userChoice === "h"){
            var letterH = 'H';
            document.getElementById("lag06").innerHTML = letterH;
            }

            else if (userChoice === "i"){
            var letterI = 'I';
            document.getElementById("lag07").innerHTML = letterI;
            }

            else if (userChoice === "j"){
            var letterJ = 'J';
            document.getElementById("lag08").innerHTML = letterJ;
            }

            else if (userChoice === "k"){
            var letterK = 'K';
            document.getElementById("lag09").innerHTML = letterK;
            }

            else if (userChoice === "l"){
            var letterL = 'L';
            document.getElementById("lag10").innerHTML = letterL;
            }

            else if (userChoice === "p"){
            var letterP = 'P';
            document.getElementById("lag11").innerHTML = letterP;
            }

            else if (userChoice === "q"){
            var letterQ = 'Q';
            document.getElementById("lag12").innerHTML = letterQ;
            }

            else if (userChoice === "r"){
            var letterR = 'R';
            document.getElementById("lag13").innerHTML = letterR;
            }

            else if (userChoice === "s"){
            var letterS = 'S';
            document.getElementById("lag14").innerHTML = letterS;
            }

            else if (userChoice === "t"){
            var letterT = 'T';
            document.getElementById("lag15").innerHTML = letterT;
            }

            else if (userChoice === "u"){
            var letterU = 'U';
            document.getElementById("lag16").innerHTML = letterU;
            }

            else if (userChoice === "v"){
            var letterV = 'V';
            document.getElementById("lag17").innerHTML = letterV;
            }

            else if (userChoice === "w"){
            var letterW = 'W';
            document.getElementById("lag18").innerHTML = letterW;
            }

            else if (userChoice === "x"){
            var letterX = 'X';
            document.getElementById("lag19").innerHTML = letterX;
            }

            else if (userChoice === "y"){
            var letterY = 'Y';
            document.getElementById("lag20").innerHTML = letterY;
            }

            else if (userChoice === "z"){
            var letterZ = 'Z';
            document.getElementById("lag21").innerHTML = letterZ;
            }
        }

        if (correctGuess1 && correctGuess2 && correctGuess3 && correctGuess4 && correctGuess5){
            correctGuessScore = true;
            if (correctGuessScore === true){
                document.getElementById("numGuessRemainText").style.display = 'none';
                document.getElementById("userGuessRemain").style.display = 'none';
        
                var winText = 'You Win!';
                document.getElementById("youWinText").innerHTML = winText;
                document.getElementById("playAgainButton").style.display = 'block';
            }
        }
        
        // clean this up slightly so that I can use true false statements like the correctGuess Score
        if (guessesRemaining === 0){
            document.getElementById("numGuessRemainText").style.display = 'none';
            document.getElementById("userGuessRemain").style.display = 'none';
    
            var correctAnswer = 'Correct answer is Madonna';
            document.getElementById("correctAnswerText").innerHTML = correctAnswer;
            document.getElementById("playAgainButton").style.display = 'block';      
        }

    }





        

    
            
    
    function onClickReload() {
        location.reload();
    }
}

*/



/*
// THIS CODE WORKS
// GAME 3
if (gamePick === "game3") {

    // Initial variables
    var correctGuessScore = 0;
    console.log(correctGuessScore)
    
    var guessesRemaining = 9;
    
    // Letter placeholders that are not necessary 
    // for this game and therefore removed
    document.getElementById("letter08").style.display = 'none';
    document.getElementById("letter09").style.display = 'none';
    document.getElementById("letter10").style.display = 'none';
    document.getElementById("letter11").style.display = 'none';
    document.getElementById("letter12").style.display = 'none';
    document.getElementById("letter13").style.display = 'none';
    document.getElementById("letter14").style.display = 'none';
    document.getElementById("letter15").style.display = 'none';
    
    // Play Again Button hidden initially
    document.getElementById("playAgainButton").style.display = 'none';
    
    // Question
    document.getElementById("question").innerHTML = 'THIS IS GAME 2: Who sang Like a Virgin?';
    
    // This function begins the game when 
    // the user presses a key on their keyboard
    document.onkeyup = function(userKeyStroke){
    
        // This determines which key the user pressed on their keyboard
        var userChoice = userKeyStroke.key;
        
        if (userChoice === "m"){
            var letterM = 'M';
            document.getElementById("letter01").innerHTML = letterM;
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
            document.getElementById("letter02").innerHTML = letterA;
            document.getElementById("letter07").innerHTML = letterA;
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
            document.getElementById("letter03").innerHTML = letterD;
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
            document.getElementById("letter04").innerHTML = letterO;
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
            document.getElementById("letter05").innerHTML = letterN;
            document.getElementById("letter06").innerHTML = letterN;
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
            
            if (userChoice === "b"){
            var letterB = 'B';
            document.getElementById("lag01").innerHTML = letterB;
            }
            
            else if (userChoice === "c"){
            var letterC = 'C';
            document.getElementById("lag02").innerHTML = letterC;
            }

            else if (userChoice === "e"){
            var letterE = 'E';
            document.getElementById("lag03").innerHTML = letterE;
            }

            else if (userChoice === "f"){
            var letterF = 'F';
            document.getElementById("lag04").innerHTML = letterF;
            }

            else if (userChoice === "g"){
            var letterG = 'G';
            document.getElementById("lag05").innerHTML = letterG;
            }

            else if (userChoice === "h"){
            var letterH = 'H';
            document.getElementById("lag06").innerHTML = letterH;
            }

            else if (userChoice === "i"){
            var letterI = 'I';
            document.getElementById("lag07").innerHTML = letterI;
            }

            else if (userChoice === "j"){
            var letterJ = 'J';
            document.getElementById("lag08").innerHTML = letterJ;
            }

            else if (userChoice === "k"){
            var letterK = 'K';
            document.getElementById("lag09").innerHTML = letterK;
            }

            else if (userChoice === "l"){
            var letterL = 'L';
            document.getElementById("lag10").innerHTML = letterL;
            }

            else if (userChoice === "p"){
            var letterP = 'P';
            document.getElementById("lag11").innerHTML = letterP;
            }

            else if (userChoice === "q"){
            var letterQ = 'Q';
            document.getElementById("lag12").innerHTML = letterQ;
            }

            else if (userChoice === "r"){
            var letterR = 'R';
            document.getElementById("lag13").innerHTML = letterR;
            }

            else if (userChoice === "s"){
            var letterS = 'S';
            document.getElementById("lag14").innerHTML = letterS;
            }

            else if (userChoice === "t"){
            var letterT = 'T';
            document.getElementById("lag15").innerHTML = letterT;
            }

            else if (userChoice === "u"){
            var letterU = 'U';
            document.getElementById("lag16").innerHTML = letterU;
            }

            else if (userChoice === "v"){
            var letterV = 'V';
            document.getElementById("lag17").innerHTML = letterV;
            }

            else if (userChoice === "w"){
            var letterW = 'W';
            document.getElementById("lag18").innerHTML = letterW;
            }

            else if (userChoice === "x"){
            var letterX = 'X';
            document.getElementById("lag19").innerHTML = letterX;
            }

            else if (userChoice === "y"){
            var letterY = 'Y';
            document.getElementById("lag20").innerHTML = letterY;
            }

            else if (userChoice === "z"){
            var letterZ = 'Z';
            document.getElementById("lag21").innerHTML = letterZ;
            }

            // an alert for an invalid entry like numbers

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

}
*/





// This code will reload a page:
// window.location.reload();

// This code will load a different page:
// window.location.href = "http://google.com";
