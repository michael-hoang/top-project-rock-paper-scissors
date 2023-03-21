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
    let beats = "beats";
    if (playerSelection === computerSelection) {
        headGfx.src = 'assets/img/kitty.png';
        return "It's a draw!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        headGfx.src = 'assets/img/player-win.png';
        if (playerSelection === "Scissors") {beats = "beat";}
        return `You win! ${playerSelection} ${beats} ${computerSelection}.`;
    } else {
        cpuScore++;
        headGfx.src = 'assets/img/cpu-win.png';
        if (computerSelection === "Scissors") {beats = "beat";}
        return `You lose! ${computerSelection} ${beats} ${playerSelection}.`;
    }
}

function checkForWinner() {
    let winnerFound = false;
    if (playerScore === 5) {
        winnerDiv.innerHTML = 'You win the game!';
        headGfx.src = 'assets/img/win.png';
        winnerFound = true;
    } else if (cpuScore === 5) {
        winnerDiv.innerHTML = 'The computer wins the game!';
        headGfx.src = 'assets/img/lose.png';
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
    playerGfx.src = '';
    cpuGfx.src = '';
    headGfx.src = 'assets/img/kitty.png';
    playBtn.innerText = 'Reset';
    playerScoreDiv.innerHTML = `Player Score: ${playerScore}`;
    cpuScoreDiv.innerHTML = `CPU Score: ${cpuScore}`;
    resultDiv.innerHTML = '&nbsp';
    winnerDiv.innerHTML = '&nbsp';
    playerChoiceBtn.forEach((button) => {
        button.disabled = false;
    });
}

function updateImages(playerSelection, computerSelection) {
    playerImagePath = `assets/img/${playerSelection}.png`;
    computerImagePath = `assets/img/${computerSelection}.png`;
    playerGfx.src = playerImagePath;
    cpuGfx.src = computerImagePath;
}

let playerScore = 0;
let cpuScore = 0;
const playerScoreDiv = document.querySelector('#player-score');
const cpuScoreDiv = document.querySelector('#cpu-score');
const resultDiv = document.querySelector('#result');
const winnerDiv = document.querySelector('#winner');
const playBtn = document.querySelector('#play-btn');
const playerChoiceBtn = document.querySelectorAll('.player-choice-btn');
const playerGfx = document.querySelector('#player-choice-gfx');
const cpuGfx = document.querySelector('#cpu-choice-gfx');
const headGfx = document.querySelector('#gfx-head');

playBtn.addEventListener('click', resetGame);
playerChoiceBtn.forEach((button) => {
    button.addEventListener('click', (event) => {
        let playerSelection = event.target.innerText;
        let computerSelection = getComputerChoice();
        updateImages(playerSelection, computerSelection);
        let result = playRound(playerSelection, computerSelection);
        resultDiv.innerHTML = `${result}`;
        playerScoreDiv.innerHTML = `Player Score: ${playerScore}`;
        cpuScoreDiv.innerHTML = `CPU Score: ${cpuScore}`;
        checkForWinner();
    });
});