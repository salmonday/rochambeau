// Rochambeau Game

// Get computer choice
function compChoice() {
    let choice = ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * choice.length)]
}

// RPS game round
function playGame() {
    // Player input rock, paper, or scissors
    let playerChoice = prompt("rock, paper, or scissors?")
    playerChoice = playerChoice.toLowerCase();
    // Get computer choice
    const compPlay = compChoice();
    // Player win conditions
    if ((playerChoice == 'rock' && compPlay == 'scissors')|| 
        (playerChoice == 'paper' && compPlay == 'rock') || 
        (playerChoice == 'scissors' && compPlay == 'paper')) {
        console.log("Win!");
        return "win";
    }
    // Draw condition
    else if (playerChoice == compPlay) {
        console.log("Draw!");
        return "draw";
    }
    // Invalid player entry
    else if (playerChoice !== 'rock' || 'paper' || 'scissors' ) {
        console.log("Invalid. Please type: rock, paper, or scissors.")
        return null;
    }
    // Computer win
    else {
        console.log("Lose!");
        return "lose";
    }

}
// Iterate and score rounds
function game() {
    // Set scores and rounds to zero
    let pScore = 0;
    let cScore = 0;
    let rounds = 0;
    // While loop for 5 rounds
    while (rounds < 5) {
        rounds++;
        // Check round result
        result = playGame();
        // On player win, player score increases by 1
        if (result == "win") {
            pScore++;
            console.log('Player: ' + pScore + ' Computer: ' + cScore)
        }
        // On player lose, computer score increases by 1
        else if (result == "lose") {
            cScore++;
            console.log('Player: ' + pScore  + ' Computer: ' + cScore)
        }
        // On draw, both scores increase by 1
        else if (result == "draw") {
            console.log('Player: ' + pScore + ' Computer: ' + cScore)
        }
        // If null returned (Invaid entry at player prompt)
        else {
            rounds--;
        }
    }
    // Overall winner or tie game
    if (pScore > cScore) {
        console.log('Player won ' + pScore + ' to ' + cScore)
    }
    else if (cScore > pScore) {
        console.log('Computer won ' + cScore + ' to ' + pScore)
    }
    else {
        console.log('Tie game ' + pScore + ' to ' + cScore)
    }
}
// Calls game function to start game
game();

