function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3); // Returns a random integer from 0 to 2.
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection_f = playerSelection.toLowerCase()
    if (playerSelection_f === "rock") {
        if (computerSelection === "Rock") {
            return "It's a draw!";
        }
        else if (computerSelection === "Paper") {
            return "You lose! Paper beats Rock";
        }
        else {
            return "You win! Rock beats Scissors"
        }
    }
    else if (playerSelection_f === "paper") {
        if (computerSelection === "Rock") {
            return "You win! Paper beats Rock"
        }
        else if (computerSelection == "Paper") {
            return "It's a draw!"
        }
        else {
            return "You lose! Scissors beat Paper"
        }
    }
    else if (playerSelection_f === "scissors") {
        if (computerSelection == "Rock") {
            return "You lose! Rock beats Scissors"
        }
        else if (computerSelection == "Paper") {
            return "You win! Scissors beat Paper"
        }
        else {
            return "It's a draw!"
        }
    }
    else{
        return "Please use only Rock, Paper, or Scissors."
    }
}

const playerSelection = "papeR";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
