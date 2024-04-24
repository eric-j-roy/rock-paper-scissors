// User inputs selection of rock, paper, or scissors
function getHumanChoice(humanChoice) {
    humanChoice = prompt("Select your weapon of choice - ROCK, PAPER, or SCISSORS: ");
    humanChoice = humanChoice.toUpperCase();

    console.log("You selected: " + humanChoice);

    return humanChoice;
}

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

    console.log("Computer selected: " + computerChoice);

    return computerChoice;
}

// Determine winner of the round based on selections
function playRound(humanChoice, computerChoice) {
    let winner = "";
    if (humanChoice === "ROCK" & computerChoice === "PAPER") {
        winner = "COMPUTER";
    } else if (humanChoice === "ROCK" & computerChoice === "SCISSORS") {
        winner = "HUMAN";
    } else if (humanChoice === "SCISSORS" & computerChoice === "ROCK") {
        winner = "COMPUTER";
    } else if (humanChoice === "SCISSORS" & computerChoice === "PAPER") {
        winner = "HUMAN";
    } else if (humanChoice === "PAPER" & computerChoice === "ROCK") {
        winner = "HUMAN";
    } else if (humanChoice === "PAPER" & computerChoice === "SCISSORS") {
        winner = "COMPUTER";
    } else {
        winner = "TIE";
    }

    if (winner === "HUMAN") {
        console.log("Nice job! " + humanChoice + " beats " + computerChoice + "!");
    } else if (winner === "COMPUTER") {
        console.log("Oh no! " + computerChoice + " beats " + humanChoice + "!");
    } else {
        console.log("It's a tie! You both picked " + computerChoice + "!");
    }

    return winner;
}

// Track the score of the game until one side has 5 wins
let humanScore = 0;
let computerScore = 0;

function playGame() {
    while (humanScore < 5 & computerScore < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        let winner = playRound(humanSelection, computerSelection);
        let tieScore = 0;
        if (winner === "HUMAN") {
            humanScore = humanScore + 1;
        } else if (winner === "COMPUTER") {
            computerScore = computerScore + 1;
        } else {
            tieScore = tieScore + 1;
        }

        console.log("*  Score: You [" + humanScore + "] - Computer [" + computerScore + "]  *");
        console.log(" ");
    }

    if (humanScore === 5) {
        console.log("Congratulations! You win!");
    } else {
        console.log("Better luck next time! The computer wins this round...");
    }
}

playGame();