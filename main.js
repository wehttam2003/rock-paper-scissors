
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice]
}

let playerScore = 0;
let computerScore = 0;
let round = 0;
let playerSelection;


function playRound(playerSelection){

    
    let computerChoice = getComputerChoice();
    if (playerScore==5 | computerScore==5){
        if (playerScore==5){
            alert("YOU WON");
        }else{
            alert("YOU LOST")
        }
        optionButtons.forEach( (element) => element.removeEventListener("click", game))
        return "end";
    }

     switch(playerSelection){
        case "rock":
            if (computerChoice==="rock"){
                return "tie";
            }
            else if (computerChoice==="paper"){
                computerScore +=1;
                return "lost";
                
            }
            else if (computerChoice==="scissors"){
                playerScore +=1;
                return "win";
            }

        case "paper":
            if (computerChoice==="rock"){
                playerScore +=1;
                return "win";
            }
            else if (computerChoice==="paper"){
                return "tie";
            }
            else if (computerChoice==="scissors"){
                computerScore +=1;
                return "lost";
            }

        case "scissors":
            if (computerChoice==="rock"){
                computerScore +=1;
                return "lost";
                
            }
            else if (computerChoice==="paper"){
                playerScore +=1;
                return "win";
            }
            else if (computerChoice==="scissors"){
                return "tie";
            }

     }

}



const optionButtons = document.querySelectorAll(".option");
const outputPlayerScore = document.querySelector(".playerScore");
const outputComputerScore = document.querySelector(".computerScore")
const output = document.querySelector(".output")


optionButtons.forEach((element) => {
    element.addEventListener("click", function game(e){playerSelection=e.target.parentNode.classList[1]
            console.log(playRound(playerSelection));
            outputPlayerScore.textContent = `player score: ${playerScore}`;
            outputComputerScore.textContent = `copmuter score: ${computerScore}`;
    })
    
})
