let userScore = 0;
let compScore = 0;
console.log("This is a JS console game of RPS. You will play a total of five rounds. Ties will award no points. The final scores will be tallied up at the end");


function singleGame(userChoice, compChoice) {
//user prompt and input
    userChoice = prompt("Rock, Paper, or Scissors?", "");
    userSelection = userChoice.toLowerCase();

// randomly generated computer answer
    compChoice = Math.floor(Math.random ()* 3);
        if (compChoice === 0) {
                computerSelection ="rock";
            }
            else if (compChoice === 1) {
                computerSelection = "paper";
            }
            else if (compChoice === 2) {
                computerSelection = "scissors";
            }

//compare the two values
if (userSelection === computerSelection) {
    console.log("tie");
    
}
else if (userSelection !== computerSelection) {
    winOrLose(userSelection, computerSelection);
}
// function if it is not a tie
function winOrLose (userSelection, computerSelection) {
    if ((userSelection === "rock" && computerSelection === "scissors") || (userSelection === "paper" && computerSelection === "rock") || (userSelection === "scissors" && computerSelection === "paper")) {
        userScore += 1;
        console.log("you have won");
        console.log(`your score is ${userScore}`);
        console.log(`the computer score is ${compScore}`);
    }
    else if ((userSelection === "rock" && computerSelection === "paper") || (userSelection === "paper" && computerSelection === "scissors") || (userSelection === "scissors" && computerSelection === "rock")) {
       compScore += 1;
       console.log("you lost"); 
       console.log(`your score is ${userScore}`);
       console.log(`the computer score is ${compScore}`);
}
}
}

//repeat the game five times
for (i=0; i<5; i++){
    singleGame();
    
}
console.log(`Your Final Score is ${userScore}`);
console.log(`The Computers Final Score is ${compScore}`);

if (userScore > compScore) {
    console.log("YOU BEAT THE COMPUTER");
}
else if ( userScore >compScore) {
    console.log("THE COMPUTER WIPED THE FLOOR WITH YOU. BETTER LUCK NEXT TIME");
}
else {
    console.log("YOU SOMEHOW TIED ALL FIVE ROUNDS. TRY AGAIN!")
}



