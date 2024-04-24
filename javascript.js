// User inputs selection of rock, paper, or scissors
function getHumanChoice(humanChoice) {
    humanChoice = prompt("Select your weapon of choice - ROCK, PAPER, or SCISSORS: ");
    humanChoice = humanChoice.toUpperCase();

    return humanChoice;
}

console.log(getHumanChoice());

// A random selection is chosen to play against the user's selection
function getComputerChoice(computerChoice) {
    let randomNumber = Math.random();
    if (randomNumber >= 0.67) {
        computerChoice = "ROCK";
    }   else if (randomNumber >= 0.33) {
        computerChoice = "PAPER";
    }   else {
        computerChoice = "SCISSORS";
    }

    return computerChoice;
    }

console.log(getComputerChoice("Test"));

// Determine winner of the round based on selections

// Track the score of the game until one side has 5 wins