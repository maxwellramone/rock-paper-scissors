let humanScore = 0;
let computerScore = 0;


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


function playRound(humanChoice, computerChoice){
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



function playGame(){
    humanScore = 0;
    computerScore = 0;

    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());

    }
    if(humanScore > computerScore){
        console.log("Human Wins The Game!");
    }
    else {
        console.log("Computer Wins The Game!");
    }
}

playGame();