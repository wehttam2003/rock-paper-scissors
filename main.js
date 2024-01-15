const choices = ["rock", "paper", "scissors"];
function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    return choices[choice]
}
