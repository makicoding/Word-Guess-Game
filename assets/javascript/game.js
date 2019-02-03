// Values assigned to each game
var gameOptions = ["game1"];
//, "game2", "game3", "game4", "game5"


// Random Number Generator to pick a game
var gamePick = gameOptions[Math.floor(Math.random() * gameOptions.length)];


// GAME 1

if (gamePick === "game1") {

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
    


    // Correct Letter placeholders that are not necessary 
    // for this game and therefore removed
    // (this game has a maximum of 15 letters available for the
    // correct word, however more can be just added on in the
    // html and javascript as necessary)
    // (ones that are necessary are commented out)
    //document.getElementById("letter01").style.display = 'none';
    //document.getElementById("letter02").style.display = 'none';
    //document.getElementById("letter03").style.display = 'none';
    //document.getElementById("letter04").style.display = 'none';
    //document.getElementById("letter05").style.display = 'none';
    //document.getElementById("letter06").style.display = 'none';
    //document.getElementById("letter07").style.display = 'none';
    document.getElementById("letter08").style.display = 'none';
    document.getElementById("letter09").style.display = 'none';
    document.getElementById("letter10").style.display = 'none';
    document.getElementById("letter11").style.display = 'none';
    document.getElementById("letter12").style.display = 'none';
    document.getElementById("letter13").style.display = 'none';
    document.getElementById("letter14").style.display = 'none';
    document.getElementById("letter15").style.display = 'none';



        // Incorrect Letter placeholders that are not necessary 
    // for this game and therefore removed
    // (corresponding letters on the right)
    // (incorrect letters of the word are commented out)
    document.getElementById("lag01").style.display = 'none';    // A
    //document.getElementById("lag02").style.display = 'none';    // B
    //document.getElementById("lag03").style.display = 'none';    // C
    document.getElementById("lag04").style.display = 'none';    // D
    //document.getElementById("lag05").style.display = 'none';    // E
    //document.getElementById("lag06").style.display = 'none';    // F
    //document.getElementById("lag07").style.display = 'none';    // G
    //document.getElementById("lag08").style.display = 'none';    // H
    //document.getElementById("lag09").style.display = 'none';    // I
    //document.getElementById("lag10").style.display = 'none';    // J
    //document.getElementById("lag11").style.display = 'none';    // K
    //document.getElementById("lag12").style.display = 'none';    // L
    document.getElementById("lag13").style.display = 'none';    // M
    document.getElementById("lag14").style.display = 'none';    // N
    document.getElementById("lag15").style.display = 'none';    // O
    //document.getElementById("lag16").style.display = 'none';    // P
    //document.getElementById("lag17").style.display = 'none';    // Q
    //document.getElementById("lag18").style.display = 'none';    // R
    //document.getElementById("lag19").style.display = 'none';    // S
    //document.getElementById("lag20").style.display = 'none';    // T
    //document.getElementById("lag21").style.display = 'none';    // U
    //document.getElementById("lag22").style.display = 'none';    // V
    //document.getElementById("lag23").style.display = 'none';    // W
    //document.getElementById("lag24").style.display = 'none';    // X
    //document.getElementById("lag25").style.display = 'none';    // Y
    //document.getElementById("lag26").style.display = 'none';    // Z



    // Play Again Button hidden initially
    document.getElementById("playAgainButton").style.display = 'none';
    

    // Question
    document.getElementById("question").innerHTML = 'Which artist sang the song Like A Virgin?';
    


    // This function begins the game when 
    // the user presses a key on their keyboard
    document.onkeyup = function(userKeyStroke){
                
        // This determines which key the user pressed on their keyboard
        var userChoice = userKeyStroke.key;
        

        // Letters in the word
        if ((userChoice === "m") || (userChoice === "M")){
            var letterM = 'M';
            document.getElementById("letter01").innerHTML = letterM;
            console.log('user typed m');
            correctGuess1 = true;
            console.log(correctGuess1);
        }
    
        else if ((userChoice === "a") || (userChoice === "A")){
            var letterA = 'A';
            document.getElementById("letter02").innerHTML = letterA;
            document.getElementById("letter07").innerHTML = letterA;
            console.log('user typed a');
            correctGuess2 = true;
            console.log(correctGuess2)
        }
    
        else if ((userChoice === "d") || (userChoice === "D")){
            var letterD = 'D';
            document.getElementById("letter03").innerHTML = letterD;
            console.log('user typed d');
            correctGuess3 = true;
            console.log(correctGuess3)
        }
    
        else if ((userChoice === "o") || (userChoice === "O")){
            var letterO = 'O';
            document.getElementById("letter04").innerHTML = letterO;
            console.log('user typed o');
            correctGuess4 = true;
            console.log(correctGuess4)
        }
    
        else if ((userChoice === "n") || (userChoice === "N")){
            var letterN = 'N';
            document.getElementById("letter05").innerHTML = letterN;
            document.getElementById("letter06").innerHTML = letterN;
            console.log('user typed n');
            correctGuess5 = true;
            console.log(correctGuess5)
        } 
    

        // Letters not in the word
        else {
            guessesRemaining--;
            document.getElementById("userGuessRemain").innerHTML = guessesRemaining;
            console.log('user score goes down by 1 point');
            
            // Letters in the word are commented out
            //if ((userChoice === "a") || (userChoice === "A")){
            //var letterA = 'A';
            //document.getElementById("lag01").innerHTML = letterA;
            //}

            if ((userChoice === "b") || (userChoice === "B")){
            var letterB = 'B';
            document.getElementById("lag02").innerHTML = letterB;
            }

            if ((userChoice === "c") || (userChoice === "C")){
            var letterC = 'C';
            document.getElementById("lag03").innerHTML = letterC;
            }
            
            //if ((userChoice === "d") || (userChoice === "D")){
            //var letterD = 'D';
            //document.getElementById("lag04").innerHTML = letterD;
            //}

            if ((userChoice === "e") || (userChoice === "E")){
            var letterE = 'E';
            document.getElementById("lag05").innerHTML = letterE;
            }

            if ((userChoice === "f") || (userChoice === "F")){
            var letterF = 'F';
            document.getElementById("lag06").innerHTML = letterF;
            }

            if ((userChoice === "g") || (userChoice === "G")){
            var letterG = 'G';
            document.getElementById("lag07").innerHTML = letterG;
            }

            if ((userChoice === "h") || (userChoice === "H")){
            var letterH = 'H';
            document.getElementById("lag08").innerHTML = letterH;
            }

            if ((userChoice === "i") || (userChoice === "I")){
            var letterI = 'I';
            document.getElementById("lag09").innerHTML = letterI;
            }

            if ((userChoice === "j") || (userChoice === "J")){
            var letterJ = 'J';
            document.getElementById("lag10").innerHTML = letterJ;
            }

            if ((userChoice === "k") || (userChoice === "K")){
            var letterK = 'K';
            document.getElementById("lag11").innerHTML = letterK;
            }

            if ((userChoice === "l") || (userChoice === "L")){
            var letterL = 'L';
            document.getElementById("lag12").innerHTML = letterL;
            }

            //if ((userChoice === "m") || (userChoice === "M")){
            //var letterM = 'M';
            //document.getElementById("lag13").innerHTML = letterM;
            //}

            //if ((userChoice === "n") || (userChoice === "N")){
            //var letterN = 'N';
            //document.getElementById("lag14").innerHTML = letterN;
            //}

            //if ((userChoice === "o") || (userChoice === "O")){
            //var letterO = 'O';
            //document.getElementById("lag15").innerHTML = letterO;
            //}

            if ((userChoice === "p") || (userChoice === "P")){
            var letterP = 'P';
            document.getElementById("lag16").innerHTML = letterP;
            }

            if ((userChoice === "q") || (userChoice === "Q")){
            var letterQ = 'Q';
            document.getElementById("lag17").innerHTML = letterQ;
            }

            if ((userChoice === "r") || (userChoice === "R")){
            var letterR = 'R';
            document.getElementById("lag18").innerHTML = letterR;
            }

            if ((userChoice === "s") || (userChoice === "S")){
            var letterS = 'S';
            document.getElementById("lag19").innerHTML = letterS;
            }

            if ((userChoice === "t") || (userChoice === "T")){
            var letterT = 'T';
            document.getElementById("lag20").innerHTML = letterT;
            }

            if ((userChoice === "u") || (userChoice === "U")){
            var letterU = 'U';
            document.getElementById("lag21").innerHTML = letterU;
            }

            if ((userChoice === "v") || (userChoice === "V")){
            var letterV = 'V';
            document.getElementById("lag22").innerHTML = letterV;
            }

            if ((userChoice === "w") || (userChoice === "W")){
            var letterW = 'W';
            document.getElementById("lag23").innerHTML = letterW;
            }

            if ((userChoice === "x") || (userChoice === "X")){
            var letterX = 'X';
            document.getElementById("lag24").innerHTML = letterX;
            }

            if ((userChoice === "y") || (userChoice === "Y")){
            var letterY = 'Y';
            document.getElementById("lag25").innerHTML = letterY;
            }

            if ((userChoice === "z") || (userChoice === "Z")){
            var letterZ = 'Z';
            document.getElementById("lag26").innerHTML = letterZ;
            }
        }



        // If all correctly guessed letters occur, then 
        // Number of guesses remaining text and user guesses remaining number disappears and 
        // You win! text and Play Again button appears.
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

        

        // If guesses remaining is zero, then
        // Number of guesses remaining text and user guesses remaining number disappears and 
        // Correct Answer and Play Again button appears.
        if (guessesRemaining === 0){
            document.getElementById("numGuessRemainText").style.display = 'none';
            document.getElementById("userGuessRemain").style.display = 'none';
    
            var correctAnswer = 'Correct answer is Madonna';
            document.getElementById("correctAnswerText").innerHTML = correctAnswer;
            document.getElementById("playAgainButton").style.display = 'block';      
            }
        }
      
            
    
    // When the Play Again button appears and is clicked, then the browser window refreshes.
    function onClickReload() {
        location.reload();
    }
}



// This code will reload a page:
// window.location.reload();

// This code will load a different page:
// window.location.href = "http://google.com";