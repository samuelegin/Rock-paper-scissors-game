"use strict";
let round = document.querySelector(".round-number");
const rockChoice = document.querySelector(".rock img");
const paperChoice = document.querySelector(".paper img");
const scissorsChoice = document.querySelector(".scissors img");
const yourPick = document.querySelector(".your-pick");
const computerPick = document.querySelector(".computer-pick");
const endDisplay = document.querySelector(".fancy-board");
const score = document.querySelector(".final-score");
const displayWin = document.querySelector(".win-status");
const reset = document.querySelector(".reset");
const wins = document.querySelector(".wins");
let currentRound = 1;
let maxRounds = 3;
let yourScore = 0;
let computerScore = 0;
rockChoice.addEventListener("click", function () {
    playRound("rock");
});
paperChoice.addEventListener("click", function () {
    playRound("paper");
});
scissorsChoice.addEventListener("click", function () {
    playRound("scissors");
});
function playRound(yourChoice) {
    if (currentRound <= maxRounds) {
        const computerChoice = generateComputerChoice();
        const winner = getWinner(yourChoice, computerChoice);
        round.textContent = currentRound;
        yourPick.innerHTML = `<img src="./Assets/Images/${yourChoice}.png" alt="${yourChoice}">`;
        computerPick.innerHTML = `<img src="./Assets/Images/${computerChoice}.png" alt="${computerChoice}">`;
        if (winner === "player") {
            yourScore++;
        }
        else if (winner === "computer") {
            computerScore++;
        }
        score.innerHTML = `<img src="./Assets/Images/you.jpg" alt=""> ${yourScore}  VS ${computerScore} <img src="./Assets/Images/computer.jpg" alt="">`;
        if (currentRound === maxRounds) {
            endGame();
        }
        currentRound++;
    }
}
function endGame() {
    setTimeout(function(){
        wins.style.display="none"
        endDisplay.style.transform = "scale(1)";
        endDisplay.style.opacity = "1";
        if (computerScore > yourScore) {
            displayWin.innerHTML = `<img src="./Assets/Images/youloose.jpg" alt="">`;
        }
        else if (yourScore === computerScore) {
            displayWin.innerHTML = `<img src="./Assets/Images/draw.jpg" alt="">`;
        }
        else {
            displayWin.innerHTML = `<img src="./Assets/Images/youwin.jpg" alt="">`;
        }
    },2000)
}
function generateComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        wins.innerHTML = `<img src="./Assets/Images/draw.jpg" alt="">`
        return "tie";
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
            wins.innerHTML = `<img src="./Assets/Images/youWin.jpg" alt="">`
        return "player";
    }
    else {
        wins.innerHTML = `<img src="./Assets/Images/youLoose.jpg" alt="">`
        return "computer";
    }
}
reset.addEventListener("click", function () {
    currentRound = 1;
    yourScore = 0;
    computerScore = 0;
    endDisplay.style.transform = "scale(0)";
    endDisplay.style.opacity = "0";
    round.textContent = currentRound;
    score.textContent = `You: ${yourScore} --- Computer: ${computerScore}`;
    yourPick.innerHTML = "";
    computerPick.innerHTML = "";
    displayWin.innerHTML = "";
});
