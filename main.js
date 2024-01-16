const choices = ["rock", "paper", "scissors"];
function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    return choices[choice]
}
//GET player input
//IMPLEMENT a function that handles the game
//  rock beats scissors
//  scissors beats paper
//  paper beats rock

function playRound(playerSelection, computerChoice){
     switch(playerSelection){
        case "rock":
            if (computerChoice==="rock"){
                return 2;
            }
            else if (computerChoice==="paper"){
                return 0;
            }
            else if (computerChoice==="scissors"){
                return 1;
            }
            break;

        case "paper":
            if (computerChoice==="rock"){
                return 1;
            }
            else if (computerChoice==="paper"){
                return 2;
            }
            else if (computerChoice==="scissors"){
                return 0;
            }
            break;

        case "scissors":
            if (computerChoice==="rock"){
                return 0;
            }
            else if (computerChoice==="paper"){
                return 1;
            }
            else if (computerChoice==="scissors"){
                return 2;
            }
            break;

     }
}
