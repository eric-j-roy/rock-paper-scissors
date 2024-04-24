// User inputs selection of rock, paper, or scissors

// A random selection is chosen to play against the user's selection

// Determine winner of the round based on selections

// Track the score of the game until one side has 5 wins

function getComputerChoice(computerChoice) {
    let randomNumber = Math.random();
    if (randomNumber >= 0.67) {
        computerChoice = "Rock";
    }   else if (randomNumber >= 0.33) {
        computerChoice = "Paper";
    }   else {
        computerChoice = "Scissors";
    }
    console.log(randomNumber);
    return computerChoice;
    }

console.log(getComputerChoice("Test"));