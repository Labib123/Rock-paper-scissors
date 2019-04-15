// caching the DOM
let userScore = 0 ;
let computerScore =0 ;
const userScore_span  = document.getElementById("user-score") ;
const computerScore_span = document.getElementById("computer-score") ;
const scoreBoard_div = document.querySelector(".score-board") ;
const result_div = document.querySelector(".result") ;
const rock_div = document.getElementById("r") ;
const paper_div = document.getElementById("p") ;
const scissors_div = document.getElementById("s") ;
function getComputerChoice(){
  const choices = ['r','p','s'] ;
  const randomNumber = Math.floor(Math.random()*  3) ;
  return choices[randomNumber] ;
}
function win() {
  userScore++ ;
  userScore_span.innerHTML = userScore ;
}

function lose() {
  computerScore++ ;
  computerScore_span.innerHTML = computerScore ; 
}
function draw() {
  console.log("draw")
}

function game(userChoice){
  const computerChoice = getComputerChoice() ;
  switch (computerChoice + userChoice ) {
    case "rs":
    case"pr" :
    case"sp":
    win() ;
      break ;
    case  "rp":
    case  "ps":
    case  "sr":
      lose() ;
      break;
    case "rr":
    case "pp":
    case "ss" :
    draw() ;
      break;
  }
}

function main(){
  rock_div.addEventListener("click" , function(){
    game("r") ;
  })

  paper_div.addEventListener("click" , function(){
    game("p") ;
  })
  scissors_div.addEventListener("click" , function(){
    game("s") ;
  })
}
main();
