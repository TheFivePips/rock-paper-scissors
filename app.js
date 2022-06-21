const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const results = document.getElementById('result')
const scoreBoard = document.getElementById('score')





let userScore = 0;
let compScore = 0;
let computerSelection = ''


function singleGame(e){
    userSelection = e.currentTarget.id
    let compChoice = Math.floor(Math.random ()* 3);

    if (compChoice === 0) {
            computerSelection ="rock";
        }
    else if (compChoice === 1) {
        computerSelection = "paper";
    }
    else if (compChoice === 2) {
        computerSelection = "scissors";
    }


    if (userSelection === computerSelection) {
        results.innerHTML = "Tie"
    }
    else if (userSelection !== computerSelection) {
            winOrLose(userSelection, computerSelection);
        }
        // function if it is not a tie
        function winOrLose (userSelection, computerSelection) {
            if ((userSelection === "rock" && computerSelection === "scissors") || (userSelection === "paper" && computerSelection === "rock") || (userSelection === "scissors" && computerSelection === "paper")) {
                userScore += 1;
                results.innerHTML ="you won";
                scoreBoard.innerHTML = `User score: ${userScore}  Comp score: ${compScore}`
            }
            else if ((userSelection === "rock" && computerSelection === "paper") || (userSelection === "paper" && computerSelection === "scissors") || (userSelection === "scissors" && computerSelection === "rock")) {
               compScore += 1;
               results.innerHTML = "you lost"; 
               scoreBoard.innerHTML = `User score: ${userScore}  Comp score: ${compScore}`
            }
    }
    if(userScore === 5) {
        results.innerHTML = "You beat the computer to five points. YOU WIN THE GAME"
    }
    if(compScore === 5) {
        results.innerHTML = "The computer beat you to five points. You lost the game"
    }
    
}

rockBtn.addEventListener('click', singleGame)
paperBtn.addEventListener('click', singleGame)
scissorsBtn.addEventListener('click', singleGame)

// function singleGame(event, compChoice) {
// //user prompt and input
    
//     userSelection = userChoice.event.

// // randomly generated computer answer
    
//         if (compChoice === 0) {
//                 computerSelection ="rock";
//             }
//         else if (compChoice === 1) {
//                 computerSelection = "paper";
//             }
//         else if (compChoice === 2) {
//                 computerSelection = "scissors";
//             }

// //compare the two values
// if (userSelection === computerSelection) {
//     console.log("tie");
    
// }
// else if (userSelection !== computerSelection) {
//     winOrLose(userSelection, computerSelection);
// }
// // function if it is not a tie
// function winOrLose (userSelection, computerSelection) {
//     if ((userSelection === "rock" && computerSelection === "scissors") || (userSelection === "paper" && computerSelection === "rock") || (userSelection === "scissors" && computerSelection === "paper")) {
//         userScore += 1;
//         console.log("you have won");
//         // console.log(`your score is ${userScore}`);
//         // console.log(`the computer score is ${compScore}`);
//     }
//     else if ((userSelection === "rock" && computerSelection === "paper") || (userSelection === "paper" && computerSelection === "scissors") || (userSelection === "scissors" && computerSelection === "rock")) {
//        compScore += 1;
//        console.log("you lost"); 
//     //    console.log(`your score is ${userScore}`);
//     //    console.log(`the computer score is ${compScore}`);
// }
// }
// }



//repeat the game five times
// for (i=0; i<5; i++){
//     singleGame();
    
// }
// console.log(`Your Final Score is ${userScore}`);
// console.log(`The Computers Final Score is ${compScore}`);

// if (userScore > compScore) {
//     console.log("YOU BEAT THE COMPUTER");
// }
// else if ( userScore >compScore) {
//     console.log("THE COMPUTER WIPED THE FLOOR WITH YOU. BETTER LUCK NEXT TIME");
// }
// else {
//     console.log("YOU SOMEHOW TIED ALL FIVE ROUNDS. TRY AGAIN!")
// }



