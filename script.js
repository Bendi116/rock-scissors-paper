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
function playRound(playerChoice, computerChoice,score,score_ai){
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice){
        console.log(`Tie! Player choice: ${playerChoice} and Computer choice: ${computerChoice} are equal.`)
        return "Tie"
    }
    //win conditions
    else if((playerChoice === "paper" && computerChoice ==="rock")|| 
        (playerChoice === "rock" && computerChoice ==="scissors") ||
        (playerChoice === "scissors" && computerChoice ==="paper"))
        {
        console.log(`Player win! ${playerChoice} beat ${computerChoice}`)
        return "Win";
        }
    //lose condition
    else{
        console.log(`Computer win! ${computerChoice} beat ${playerChoice}`)
        return "Lose";
        }
}

function playGame(){
    //var
    let score = 0;
    let score_ai = 0;


    for(let i = 0; i < 5;i++){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, paper, or scissors?");
        round = playRound(playerSelection,computerSelection,score);
        if (round === "Win"){
            score++;
        }else if(round === "Lose"){
            score_ai++;
        }
    }
    if(score> score_ai){
        console.log("You win the game!")
    }else if(score<score_ai){
        console.log("Youn lose the game!")
    }else{
        console.log("The is draw!")
    }
}

playGame();