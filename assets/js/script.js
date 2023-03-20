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
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "Rock") {
            return "It's a draw!";
        } else if (computerSelection === "Paper") {
            cpuScore++;
            return "You lose! Paper beats Rock";
        } else {
            playerScore++;
            return "You win! Rock beats Scissors"
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "Rock") {
            playerScore++;
            return "You win! Paper beats Rock"
        } else if (computerSelection === "Paper") {
            return "It's a draw!"
        } else {
            cpuScore++;
            return "You lose! Scissors beat Paper"
        }
    }
    else {
        if (computerSelection === "Rock") {
            playerScore++;
            return "You lose! Rock beats Scissors"
        } else if (computerSelection === "Paper") {
            cpuScore++;
            return "You win! Scissors beat Paper"
        } else {
            return "It's a draw!"
        }
    }
}

function checkForWinner() {
    let winnerFound = false;
    if (playerScore === 5) {
        winnerDiv.innerHTML = 'You win the game!';
        winnerFound = true;
    } else if (cpuScore === 5) {
        winnerDiv.innerHTML = 'The computer wins the game!';
        winnerFound = true;
    }
    if (winnerFound) {
        playBtn.innerText = 'Play again';
        playerChoiceBtn.forEach((button) => {
            button.disabled = true;
        });
    }
}

function resetGame() {
    playerScore = 0;
    cpuScore = 0;
    playBtn.innerText = 'Reset';
    playerScoreDiv.innerHTML = `Player Score: ${playerScore}`;
    cpuScoreDiv.innerHTML = `CPU Score: ${cpuScore}`;
    resultDiv.innerHTML = 'Result:';
    winnerDiv.innerHTML = '';
    playerChoiceBtn.forEach((button) => {
        button.disabled = false;
    })
}

let playerScore = 0;
let cpuScore = 0;
const playerScoreDiv = document.querySelector('#player-score');
const cpuScoreDiv = document.querySelector('#cpu-score');
const resultDiv = document.querySelector('#result');
const winnerDiv = document.querySelector('#winner');
const playBtn = document.querySelector('#play-btn');
const playerChoiceBtn = document.querySelectorAll('.player-choice-btn');

playBtn.addEventListener('click', resetGame);

playerChoiceBtn.forEach((button) => {
    button.addEventListener('click', (event) => {
        let playerSelection = event.target.innerText;
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        resultDiv.innerHTML = `Result: ${result}`;
        playerScoreDiv.innerHTML = `Player Score: ${playerScore}`;
        cpuScoreDiv.innerHTML = `CPU Score: ${cpuScore}`;
        checkForWinner();
    });
});