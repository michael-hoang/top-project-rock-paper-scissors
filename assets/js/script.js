function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); // Returns a random integer from 0 to 2.
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
    if (typeof(playerSelection) === "string") {
        playerSelection = playerSelection.toLowerCase();
    }

    if (playerSelection === "rock") {
        if (computerSelection === "Rock") {
            return "It's a draw!";
        } else if (computerSelection === "Paper") {
            return "You lose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors"
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "Rock") {
            return "You win! Paper beats Rock"
        } else if (computerSelection === "Paper") {
            return "It's a draw!"
        } else {
            return "You lose! Scissors beat Paper"
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "Rock") {
            return "You lose! Rock beats Scissors"
        } else if (computerSelection === "Paper") {
            return "You win! Scissors beat Paper"
        } else {
            return "It's a draw!"
        }
    } else {
        playerSelection = prompt("Please pick only Rock, Paper, or Scissors:");
        return playRound(playerSelection, computerSelection);
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 1; i++) { // play one round
        let playerSelection = prompt("Pick Rock, Paper, or Scissors:");
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection)
        console.log(result);
        if (result.slice(0, 8) === "You win!") {
            playerScore++;
        } else if (result.slice(0, 9) === "You lose!") {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a draw!");
    }
}

