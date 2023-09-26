let round = document.querySelector(".round-number");
const rockChoice = document.querySelector(".rock img");
const paperChoice = document.querySelector(".paper img");
const scissorsChoice = document.querySelector(".scissors img");
const yourPick = document.querySelector(".your-pick");
const computerPick = document.querySelector(".computer-pick");
const endDisplay = document.querySelector(".fancy-board");
const score = document.querySelector(".final-score");
const displayWin = document.querySelector(".win-status");
const reset = document.querySelector(".reset")
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
    } else if (winner === "computer") {
      computerScore++;
    }

    score.textContent = `You: ${yourScore} --- Computer: ${computerScore}`;

    if (currentRound === maxRounds) {
      endGame(); 
    }

    currentRound++;
  }
}

function endGame() {
  endDisplay.style.display = "unset";

  if (computerScore > yourScore) {
    displayWin.innerHTML = `<img src="./Assets/Images/youloose.jpg" alt="">`;
  } else if (yourScore === computerScore) {
    displayWin.innerHTML = `<img src="./Assets/Images/draw.jpg" alt="">`;
  } else {
    displayWin.innerHTML = `<img src="./Assets/Images/youwin.jpg" alt="">`;
  }
}

function generateComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

reset.addEventListener("click", function () {
  currentRound = 1;
  yourScore = 0;
  computerScore = 0;

  endDisplay.style.display = "none";

  round.textContent = currentRound;
  score.textContent = `You: ${yourScore} --- Computer: ${computerScore}`;
  yourPick.innerHTML = "";
  computerPick.innerHTML = "";
  displayWin.innerHTML = "";
});
