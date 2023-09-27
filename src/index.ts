/* Types */
type Choices = [string, string, string]

let round = document.querySelector(".round-number")!;
const rockChoice = <HTMLImageElement>document.querySelector(".rock img");
const paperChoice = <HTMLImageElement>document.querySelector(".paper img");
const scissorsChoice = <HTMLImageElement>document.querySelector(".scissors img");
const yourPick = <HTMLDivElement>document.querySelector(".your-pick");
const computerPick = <HTMLDivElement>document.querySelector(".computer-pick");
const endDisplay = <HTMLDivElement>document.querySelector(".fancy-board");
const score = <HTMLDivElement>document.querySelector(".final-score");
const displayWin = <HTMLDivElement>document.querySelector(".win-status");
const reset = <HTMLButtonElement>document.querySelector(".reset");
let currentRound: number = 1;
let maxRounds: number = 3;
let yourScore: number = 0;
let computerScore: number = 0;

rockChoice.addEventListener("click", function () {
  playRound("rock");
});

paperChoice.addEventListener("click", function () {
  playRound("paper");
});

scissorsChoice.addEventListener("click", function () {
  playRound("scissors");
});

function playRound(yourChoice: string): void {
  if (currentRound <= maxRounds) {
    const computerChoice = generateComputerChoice();
    const winner = getWinner(yourChoice, computerChoice);
    round.textContent = currentRound as unknown as string;
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
  endDisplay.style.transform = "scale(1)";
  endDisplay.style.opacity = "1";

  if (computerScore > yourScore) {
    displayWin.innerHTML = `<img src="./Assets/Images/youloose.jpg" alt="">`;
  } else if (yourScore === computerScore) {
    displayWin.innerHTML = `<img src="./Assets/Images/draw.jpg" alt="">`;
  } else {
    displayWin.innerHTML = `<img src="./Assets/Images/youwin.jpg" alt="">`;
  }
}

function generateComputerChoice() {
  const choices: Choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(playerChoice: string, computerChoice: string): string {
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

  endDisplay.style.transform = "scale(0)";
  endDisplay.style.opacity = "0";

  round.textContent = currentRound as unknown as string;
  score.textContent = `You: ${yourScore} --- Computer: ${computerScore}`;
  yourPick.innerHTML = "";
  computerPick.innerHTML = "";
  displayWin.innerHTML = "";
});
