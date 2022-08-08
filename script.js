// welcome messages
console.log('Let\'s play a game...');
console.log('You may have heard of it, perhaps even played it...');
console.log('It\'s a cult classic called...');
console.log('Rock, Paper, Scissors');
console.log('');
console.log('You will play 5 rounds total, first to 3 wins!')
console.log('');
console.log('');

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

const computerSelection = getComputerChoice();

// function to take any caps/lowers of player string and convert to Proper spelling 
function getPlayerChoice() {
    let playerChoice = prompt('Rock, Paper, or Scissors')
    if (playerChoice == undefined) {
        return alert('Type in only Rock, Paper, or Scissors. Typing in wrong choice or esc/Cancel is a round loss.');
    } 
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === 'rock') {
        return 'Rock';
    } else if (playerChoice === 'paper') {
        return 'Paper';
    } else if (playerChoice === 'scissors') {
        return 'Scissors';
    } else {
        return alert('Type in only Rock, Paper, or Scissors. Typing in wrong choice or esc/Cancel is a round loss.');
    }
}

let playerSelection = getPlayerChoice();

// initializing starting score
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

// function to declare winner of the round and add 1 point to score
function playRound(playerSelection, computerSelection) {
    // deciding when there is a tie
    if (playerSelection == computerSelection) { 
        roundWinner = 'tie';
        playerScore++;
        computerScore++;
    }
    // deciding when the player wins
    if (
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')
    ) { 
        roundWinner = 'player';
        playerScore++;
    }
    // deciding when the computer wins
    if (
        (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper') ||
        ((playerSelection == undefined) || (playerSelection == null))
    ) { 
        roundWinner = 'computer';
        computerScore++;
    }
}

// function to announce the winner of the round
function updateMessage (roundWinner, playerSelection, computerSelection) {
    if (roundWinner == 'player') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } 
    if (roundWinner == 'computer') {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    if (roundWinner == 'tie') {
        console.log(`Tie game! ${playerSelection} ties ${computerSelection}`);
    }
}

playRound(playerSelection, computerSelection);
updateMessage(roundWinner, playerSelection, computerSelection);

// function to keep score of and alert winner of game - best 3 out of 5 rounds
function gameOver(playRound) {
    if ((playerScore == 3) || (computerScore == 3)) {
        if (playerScore > computerScore) {
            console.log(`You win! You beat the computer ${playerScore} to ${computerScore}`);
        }
        else if (playerScore < computerScore) {
            console.log(`The computer wins! It beat you ${computerScore} to ${playerScore}`)
        }
        else {
            console.log(`It\'s a tie game! This is what happens when an Unstoppable Force meets an Immovable Object`)
        }
    }
}

gameOver(playRound);

// Here we log all important messages to the console for the player to see - will add GUI later
console.log(`Computer chose: ${computerSelection}`);
console.log(`You chose: ${playerSelection}`);
console.log('');
console.log(`playerScore is ${playerScore}`);
console.log(`computerScore is ${computerScore}`);
console.log(`roundWinner is ${roundWinner}`);