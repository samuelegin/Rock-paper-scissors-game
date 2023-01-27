let yourScore = document.getElementById("yourScore")
let compScore = document.getElementById("compScore")

let rock = document.getElementById("rock")
let paper= document.getElementById("paper")
let scissors = document.getElementById("scissors")

let rps =["rock","scissors","paper"]
let status = document.getElementById("winStatus")

let yourPick = document.getElementById("yourPick")
let compPick = document.getElementById("compPick")





rock.addEventListener("click",() => {
   compPick.innerHTML =rps[ Math.floor(Math.random() * 3)]
   yourPick.innerHTML ="Rock"
   if (compPick.innerHTML == "scissors") {
       yourScore.innerHTML++
       status.innerHTML="YOU WIN &#128522 &#127882"
   }else if(compPick.innerHTML== "paper"){
       compScore.innerHTML++
       status.innerHTML="COMPUTER WINS &#128527 &#128541"
   }else{
       compScore + 0 && yourScore + 0
       status.innerHTML="IT'S A DRAW &#128578 &#129335"
   }
})

paper.addEventListener("click",() => {
   compPick.innerHTML = rps[ Math.floor(Math.random() * 3)]
   yourPick.innerHTML ="Paper"
   if (compPick.innerHTML == "rock") {
       yourScore.innerHTML++
       status.innerHTML="YOU WIN &#128522 &#127882"
   }else if(compPick.innerHTML== "scissors"){
       compScore.innerHTML++
       status.innerHTML="COMPUTER WINS &#128527 &#128541"
   }else{
       compScore + 0 && yourScore + 0
       status.innerHTML="IT'S A DRAW &#128578 &#129335"
   }
})

scissors.addEventListener("click",() => {
   compPick.innerHTML = rps[ Math.floor(Math.random() * 3)]
   yourPick.innerHTML ="Scissors"
   if (compPick.innerHTML == "rock") {
       compScore.innerHTML++
       status.innerHTML="COMPUTER WINS &#128527 &#128541"
   }else if(compPick.innerHTML== "paper"){
       yourScore.innerHTML++
       status.innerHTML="YOU WIN &#128522 &#127882"
   }else{
       compScore + 0 && yourScore + 0
       status.innerHTML="IT'S A DRAW &#128578 &#129335"
   }
})