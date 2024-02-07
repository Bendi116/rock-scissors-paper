function getComputerChoice() {
let choice;
   let random = Math.floor(Math.random()*3)+1
   if(random === 1){
        choice="rock";
   }else if(random === 2){
        choice = "paper";
   }else{
        choice="scissors";
   }
   return choice;
}
function playRound(e){
    let computerChoice = getComputerChoice()
    let playerChoice = e.target.innerText.toLowerCase( )
    
    if(playerScore.innerText < 5 && computerScore.innerText<5){
        if (playerChoice === computerChoice){
            resultDiv.innerText=`Tie! Player choice: ${playerChoice} and Computer choice: ${computerChoice} are equal.`
            
        }
        //win conditions
        else if((playerChoice === "paper" && computerChoice ==="rock")|| 
            (playerChoice === "rock" && computerChoice ==="scissors") ||
            (playerChoice === "scissors" && computerChoice ==="paper"))
            {
                resultDiv.innerText=`Player win! ${playerChoice} beat ${computerChoice}`
                playerScore.innerText = addScore(playerScore.innerText);
                if(playerScore.innerHTML == 5){
                    resultDiv.innerText="Congratulations! You won the game!"
                }
            
            }
        //lose condition
        else{
            resultDiv.innerText=`Computer win! ${computerChoice} beat ${playerChoice}`
            computerScore.innerText = addScore(computerScore.innerText);
            if(computerScore.innerHTML == 5){
                resultDiv.innerText="Game Over! The computer beat you!"
            }
            }
            
    }
   
        
}


function addScore(score){
    let newScore = parseInt(score)
    newScore++;
    return newScore.toString()
}

const btns = document.querySelectorAll(".btn")
let btns_array = Array.from(btns)
btns_array.forEach(function(btn){
    btn.addEventListener("click",playRound)
})
const resultDiv = document.querySelector(".result")
const playerScore = document.querySelector(".playerScore")
const computerScore = document.querySelector(".computerScore")



