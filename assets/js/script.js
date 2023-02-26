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