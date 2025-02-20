// Choices
const choices = ["Rock", "Paper", "Scissors"];
let human_choice = "";

// Scores
let human_score = 0;
let computer_score = 0;

// Selecting DOM Elements
const start_button = document.getElementById("start_button");
const button_container = document.getElementById("button_container");
const result_container = document.getElementById("result_container");

// Start the game
function playGame() {
    createButtons();
}

// Create buttons for user choices
function createButtons() {
    button_container.innerHTML = ""; // Clear existing buttons

    choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => {
            human_choice = choice;
            playRound();
            checkWinner();
        });
        button_container.appendChild(button);
    });
}

// Play a single round
function playRound() {
    let computer_choice = getComputerChoice();

    switch (human_choice) {
        case "Rock":
            switch (computer_choice) {
                case "Paper":
                    computer_score++;
                    console.log("Computer won this round!");
                    break;
                case "Scissors":
                    human_score++;
                    console.log("You won this round!");
                    break;
            }
            break;

        case "Paper":
            switch (computer_choice) {
                case "Scissors":
                    computer_score++;
                    console.log("Computer won this round!");
                    break;
                case "Rock":
                    human_score++;
                    console.log("You won this round!");
                    break;
            }
            break;

        case "Scissors":
            switch (computer_choice) {
                case "Rock":
                    computer_score++;
                    console.log("Computer won this round!");
                    break;
                case "Paper":
                    human_score++;
                    console.log("You won this round!");
                    break;
            }
            break;
    }

    console.log(`Score: You - ${human_score}, Computer - ${computer_score}`);
}

// Get computer's choice
function getComputerChoice() {
    let random_number = Math.floor(Math.random() * 3);
    return choices[random_number];
}

// Check if game is over
function checkWinner() {
    if (human_score === 5 || computer_score === 5) {
        result_container.innerHTML = ""; // Clear previous results

        const result = document.createElement("div");
        if (human_score > computer_score) {
            result.textContent = "You Win!";
        } else {
            result.textContent = "You Lost!";
        }
        result_container.appendChild(result);

        // Reset scores for a new game
        human_score = 0;
        computer_score = 0;
    }
}

start_button.addEventListener("click", playGame);
