// This is a function called computerPlay that will randomly return either rock paper or scissors

function computerPlay () {
    compChoice = Math.floor(Math.random ()* 3);
    if (compChoice === 0) {
        computerSelection ="rock";
    }
    else if (compChoice === 1) {
        computerSelection = "paper";
    }
    else {
        computerSelection = "scissors";
    }
}
computerPlay();



function playerPlay () {
    playerChoice = prompt ("Rock, Paper, or Scissors?", "");
    playerSelection = playerChoice.toLowerCase();
    return playerSelection;

}
playerPlay();

function singleRound(playerSelection, computerSelection){
   switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper"){
                console.log("Paper beats rock. You Lose!");
            }
            else {
                console.log("Rock beats scissors. You Win!");
            }
            break;
        case "paper":
            if (computerSelection === "scissors"){
                return "Scissors beats paper. You Lose!";
                }
            else {
                return "Paper beats rock. You Win!";
                }
            break;
        case "scissors":
            if (computerSelection === "rock"){
                return "Rock beats scissors. You Lose!";
                }
            else {
                return "Scissors beats paper. You Win!";
                }
            break;
        }
}




function game () {
    singleRound(playerSelection, computerSelection);


    
}


    
    