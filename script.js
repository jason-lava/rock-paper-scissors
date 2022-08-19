// initializing starting score and buttons
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

// constants for UI - button clicks, updating messages from JS -> HTML
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const restartBtn0 = document.querySelector('#restart0');
const restartBtn1 = document.querySelector('#restart1');
const restartBtn2 = document.querySelector('#restart2');
const playerSelectionHTML = document.querySelector('#playerSelection');
const computerSelectionHTML = document.querySelector('#computerSelection');
const roundWinnerHTML = document.querySelector('#roundWinner');
const playerScoreHTML = document.querySelector('#playerScore');
const computerScoreHTML = document.querySelector('#computerScore');
const gameWinnerHTML = document.querySelector('#gameWinner');
const welcomeMessageHTML = document.querySelector('#welcome');

playerSelectionHTML.textContent = `Your choice:`
computerSelectionHTML.textContent = `Computer choice:`
roundWinnerHTML.textContent = `Round winner:`
playerScoreHTML.textContent = `Your score: ${playerScore}`
computerScoreHTML.textContent = `Computer score: ${computerScore}` 

// welcome messages
function startMessages () {
    welcomeMessageHTML.textContent = 'Let\'s play Rock, Paper, Scissors!'
    const p0 = document.createElement('p')
    p0.textContent = ''
    welcomeMessageHTML.appendChild(p0);
}

startMessages();

// function to randomly choose computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2: 
            return 'Scissors';
    }
}

// button press functions and events
rockBtn.addEventListener('click', () => {
    playerSelection = 'Rock';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});
paperBtn.addEventListener('click', () => {
    playerSelection = 'Paper';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});
scissorsBtn.addEventListener('click', () => {
    playerSelection = 'Scissors';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});
restartBtn0.addEventListener('click', () => {
    gameRestart();
})
restartBtn1.addEventListener('click', () => {
    gameRestart();
})
restartBtn2.addEventListener('click', () => {
    gameRestart();
})

// make restart button disabled until end of game
restartBtn0.hidden = true;
restartBtn1.hidden = true;
restartBtn2.hidden = true;

// function to declare winner of the round and update score
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) { // deciding when there is a tie
        roundWinner = 'It is a draw. +1 to you both.';
        playerScore++;
        computerScore++;
    }
    if ( // deciding when the player wins
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')
    ) { 
        roundWinner = 'You';
        playerScore++;
    }
    if ( // deciding when the computer wins
        (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper') ||
        ((playerSelection == undefined) || (playerSelection == null))
    ) { 
        roundWinner = 'Computer';
        computerScore++;
    }
    playerSelectionHTML.textContent = `Your choice: ${playerSelection}`
    computerSelectionHTML.textContent = `Computer choice: ${computerSelection}`
    roundWinnerHTML.textContent = `Round winner: ${roundWinner}`
    playerScoreHTML.textContent = `Your score: ${playerScore}`
    computerScoreHTML.textContent = `Computer score: ${computerScore}`
    gameOver(playRound);
}

// function to keep score of and alert winner of game - first to 3 points wins!
function gameOver(playRound) {
    if ((playerScore === 3) && (computerScore === 3)) {
        gameWinnerHTML.textContent = 'NEXT POINT WINS. GOOD LUCK!'
    }
    if (((playerScore === 3) || (computerScore === 3)) || ((playerScore >= 3) || (computerScore >= 3))) {
        if (playerScore > computerScore) {
            gameWinnerHTML.textContent = `You win! You beat the computer ${playerScore} to ${computerScore}.`
            // hides buttons once winner is made
            rockBtn.hidden = true; 
            paperBtn.hidden = true;
            scissorsBtn.hidden = true;
            restartBtn0.hidden = false;
            restartBtn1.hidden = false;
            restartBtn2.hidden = false;
        } else if (playerScore < computerScore) {
            gameWinnerHTML.textContent = `You lose! The computer beat you ${computerScore} to ${playerScore}.`
            // hides buttons once winner is made
            rockBtn.hidden = true;
            paperBtn.hidden = true;
            scissorsBtn.hidden = true;
            restartBtn0.hidden = false;
            restartBtn1.hidden = false;
            restartBtn2.hidden = false;        }
    }
}

// function to restart game, reset score, and enable buttons
function gameRestart() {
    playerScore = 0;
    computerScore = 0;
    roundWinner = '';
    playerSelectionHTML.textContent = `Your choice:`
    computerSelectionHTML.textContent = `Computer choice:`
    roundWinnerHTML.textContent = `Round winner:`
    playerScoreHTML.textContent = `Your score: ${playerScore}`
    computerScoreHTML.textContent = `Computer score: ${computerScore}`
    gameWinnerHTML.textContent = '';
    rockBtn.hidden = false;
    paperBtn.hidden = false;
    scissorsBtn.hidden = false;
    restartBtn0.hidden = true;
    restartBtn1.hidden = true;
    restartBtn2.hidden = true;
    startMessages();
}