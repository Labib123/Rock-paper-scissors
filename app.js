// caching the DOM
let userScore = 0 ;
let computerScore =0 ;
const userScore_span  = document.getElementById("user-score") ;
const computerScore_span = document.getElementById("computer-score") ;
const scoreBoard_div = document.querySelector(".score-board") ;
const result_div = document.querySelector(".result > p") ;
const rock_div = document.getElementById("r") ;
const paper_div = document.getElementById("p") ;
const scissors_div = document.getElementById("s") ;
function getComputerChoice(){
  const choices = ['r','p','s'] ;
  const randomNumber = Math.floor(Math.random()*  3) ;
  return choices[randomNumber] ;
}
function convert(letter){
  if(letter == 'r') return"Rock"  ;
  if(letter == 'p') return"Papper"  ;
  if(letter == 's') return"Scissor"  ;
}
function win(computer,user) {
  userScore++ ;
  const smallUserWord = "User".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub() ;
  userScore_span.innerHTML = userScore ;
  result_div.innerHTML= convert(user) + smallUserWord+  " beats " + convert(computer) + smallCompWord+ " You win! 🎈"  ;
  document.getElementById(user).classList.add("green-glow") ;
  setTimeout(function(){
      document.getElementById(user).classList.remove("green-glow" )
  } , 1000)
  board(userScore,computerScore) ;

}


function lose(computer,user) {
  computerScore++ ;
  computerScore_span.innerHTML = computerScore ;
  const smallUserWord = "User".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub() ;
  userScore_span.innerHTML = userScore ;
  result_div.innerHTML=  convert(computer) + smallCompWord+ " beats " + convert(user) + smallUserWord +  " You lost ..."  ;
  document.getElementById(user).classList.add("red-glow") ;
  setTimeout(function(){
      document.getElementById(user).classList.remove("red-glow" )
  } , 1000)
  board(userScore,computerScore) ;

} ;
function draw(computer,user) {
  const smallUserWord = "User".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub() ;
  result_div.innerHTML= convert(user) + smallUserWord +   " equals " + convert(computer) + smallCompWord + " Its a draw ! "  ;
  document.getElementById(user).classList.add("blue-glow") ;
  setTimeout(function(){document.getElementById(user).classList.remove("blue-glow")} , 1000)
  board(userScore,computerScore) ;
}

function game(userChoice){
  const computerChoice = getComputerChoice() ;
  switch ( userChoice + computerChoice) {
    case "rs":
    case"pr" :
    case"sp":
        win(computerChoice,userChoice) ;
        break ;
    case  "rp":
    case  "ps":
    case  "sr":
        lose(computerChoice,userChoice) ;
        break;
    case "rr":
    case "pp":
    case "ss" :
        draw(computerChoice,userChoice) ;
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

function board(userScore,computerScore) {
    if(computerScore < userScore){
        document.getElementById('score-board').className= "score-board" ;
        document.getElementById('score-board').classList.add('green-glow') ;}
    else if(computerScore == userScore) {
      document.getElementById('score-board').className= "score-board" ;
      document.getElementById('score-board').classList.add('blue-glow')
    }
  else{
      document.getElementById('score-board').className= "score-board" ;
      document.getElementById('score-board').classList.add('red-glow')
  }

}
