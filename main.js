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

let score = 0;

function playRound(){

    let playerSelection = prompt("What do you choose?: ").toLocaleLowerCase();
    let computerChoice = getComputerChoice();

     switch(playerSelection){
        case "rock":
            if (computerChoice==="rock"){
                console.log("tie");
            }
            else if (computerChoice==="paper"){
                console.log("lost");
            }
            else if (computerChoice==="scissors"){
                score +=1
                console.log("win");
            }
            break;

        case "paper":
            if (computerChoice==="rock"){
                score +=1
                console.log("win");
            }
            else if (computerChoice==="paper"){
                console.log("tie");
            }
            else if (computerChoice==="scissors"){
                console.log("lost");
            }
            break;

        case "scissors":
            if (computerChoice==="rock"){
                console.log("lost");
            }
            else if (computerChoice==="paper"){
                score +=1
                console.log("win");
            }
            else if (computerChoice==="scissors"){
                console.log("tie");
            }
            break;

     }

}


function game(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

game()
if (score>=3){
    console.log("you won best out of three, congrats")
}else{
    console.log("you did not win best out of three")
}
