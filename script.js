// initializing starting score and buttons
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

// constants for UI - button clicks, updating messages from JS -> HTML
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const restartBtn = document.querySelector('#restart');
const playerSelectionHTML = document.querySelector('#playerSelection');
const computerSelectionHTML = document.querySelector('#computerSelection');
const roundWinnerHTML = document.querySelector('#roundWinner');
const playerScoreHTML = document.querySelector('#playerScore');
const computerScoreHTML = document.querySelector('#computerScore');
const gameWinnerHTML = document.querySelector('#gameWinner');
const welcomeMessageHTML = document.querySelector('#welcome');

playerSelectionHTML.textContent = `You chose:`
computerSelectionHTML.textContent = `Computer chose:`
roundWinnerHTML.textContent = `Round winner:`
playerScoreHTML.textContent = `Your score: ${playerScore}`
computerScoreHTML.textContent = `Computer score: ${computerScore}` 

// welcome messages
function startMessages () {
    welcomeMessageHTML.textContent = 'Let\'s play Rock, Paper, Scissors!'
    const p0 = document.createElement('p')
    p0.textContent = 'Rules:'
    const p1 = document.createElement('p')
    p1.textContent = '--------------------'
    const p2 = document.createElement('p')
    p2.textContent = 'Rock > Scissors > Paper'
    const p3 = document.createElement('p')
    p3.textContent = 'Paper > Rock > Scissors'
    const p4 = document.createElement('p')
    p4.textContent = 'Tie games give +1 to both player & computer'
    const p5 = document.createElement('p')
    p5.textContent = 'First to 3 points wins!'
    const p6 = document.createElement('p')
    p6.textContent = '--------------------'
    welcomeMessageHTML.appendChild(p0);
    welcomeMessageHTML.appendChild(p1);
    welcomeMessageHTML.appendChild(p2);
    welcomeMessageHTML.appendChild(p3);
    welcomeMessageHTML.appendChild(p4);
    welcomeMessageHTML.appendChild(p5);
    welcomeMessageHTML.appendChild(p6);
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
restartBtn.addEventListener('click', () => {
    gameRestart();
})

// make restart button disabled until end of game
restartBtn.hidden = true;

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
    playerSelectionHTML.textContent = `You chose: ${playerSelection}`
    computerSelectionHTML.textContent = `Computer chose: ${computerSelection}`
    roundWinnerHTML.textContent = `Round winner: ${roundWinner}`
    playerScoreHTML.textContent = `Your score: ${playerScore}`
    computerScoreHTML.textContent = `Computer score: ${computerScore}`
    gameOver(playRound);
}

// function to keep score of and alert winner of game - first to 3 points wins!
function gameOver(playRound) {
    if ((playerScore === 3) && (computerScore === 3)) {
        gameWinnerHTML.textContent = 'NEXT POINT WINS. GIVE IT YOUR BEST SHOT!'
    }
    if (((playerScore === 3) || (computerScore === 3)) || ((playerScore >= 3) || (computerScore >= 3))) {
        if (playerScore > computerScore) {
            gameWinnerHTML.textContent = `You win! You beat the computer ${playerScore} to ${computerScore}.`
            // disables buttons once winner is made
            rockBtn.disabled = true; 
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
            restartBtn.hidden = false;
        } else if (playerScore < computerScore) {
            gameWinnerHTML.textContent = `You lose! The computer beat you ${computerScore} to ${playerScore}.`
            // disables buttons once winner is made
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
            restartBtn.hidden = false;
        }
    }
}

// function to restart game, reset score, and enable buttons
function gameRestart() {
    playerScore = 0;
    computerScore = 0;
    roundWinner = '';
    playerSelectionHTML.textContent = `You chose:`
    computerSelectionHTML.textContent = `Computer chose:`
    roundWinnerHTML.textContent = `Round winner:`
    playerScoreHTML.textContent = `Your score: ${playerScore}`
    computerScoreHTML.textContent = `Computer score: ${computerScore}`
    gameWinnerHTML.textContent = '';
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    restartBtn.hidden = true;
    startMessages();
}