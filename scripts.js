let humanScore = 0;
let computerScore = 0;
const start_button = document.getElementById("start_button");
const button_container = document.getElementById("button_container");
const result_container = document.getElementById("result_container");

function getComputerChoice(){
    let number = (parseInt(3 * Math.random())) + 1;

    switch(number){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Pick a move (Rock, Paper, Scissors)");
    return choice;
}


function playRound(computerChoice){
    

    humanChoice = rock_button.addEventListener("click",() => {return "rock"});
    paper_button.addEventListener("click",() => {return "paper"});
    scissors_button.addEventListener("click",() => {return "scissors"});

    humanChoice = humanChoice.toLowerCase();

    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "paper":
                    computerScore++;
                    console.log("computer won");
                    break;
                case "scissors":
                    humanScore++;
                    console.log("human won");
                    break;
            }
            break;

        case "paper":
            switch (computerChoice) {
                case "scissors":
                    computerScore++;
                    console.log("computer won");
                    break;
                case "rock":
                    humanScore++;
                    console.log("human won");
                    break;
            }
            break;

        case "scissors":
            switch (computerChoice) {
                case "rock":
                    computerScore++;
                    console.log("computer won");
                    break;
                case "paper":
                    humanScore++;
                    console.log("human won");
                    break;
            }
            break;
    }

}


function addButtons() {
    const rock_button = document.createElement("button");
    rock_button.textContent = "Rock";

    const paper_button = document.createElement("button");
    paper_button.textContent = "Paper";

    const scissors_button = document.createElement("button");
    scissors_button.textContent = "Scissors";


    button_container.appendChild(rock_button);
    button_container.appendChild(paper_button);
    button_container.appendChild(scissors_button);
}


function playGame(){
    humanScore = 0;
    computerScore = 0;
    start_button.remove();
    addButtons();
    
    
    playRound(getComputerChoice());

    
    
    if(humanScore > computerScore){
        const win = document.createElement("div");
        win.textContent = "You Win!";
        result_container.appendChild(win);

    }
    else {
        const lose = document.createElement("div");
        lose.textContent = "You Lost!";
        result_container.appendChild(lose);
    }
}

start_button.addEventListener("click", playGame);
