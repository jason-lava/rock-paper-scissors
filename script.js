/* Pseudo code:
    4. RPS (Rock, Paper, Scissors) is a set of rounds i.e. 3 of 5
        Now wrap it
        function playRound(playerSelection, computerSelection)
    5. Now to save the rounds and winners
        need function to keep score and report winner or loser
        use a loop
        e.g. 
        for (let i=0; i<5; i++) {
            code goes here
        }
*/

console.log('Let\'s play a game...');
console.log('You may have heard of it, perhaps even played it...');
console.log('It\'s a cult classic called...');
console.log('Rock, Paper, Scissors');
console.log('');


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


let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == undefined) || (playerSelection == null)) {
        roundWinner = 'computer';
        computerScore++;
    }
    if (
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')
    ) { 
        roundWinner = 'player';
        playerScore++;
    }
    if (
        (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper')
    ) { 
        roundWinner = 'computer';
        computerScore++;
    }
    if (playerSelection == computerSelection) { 
        roundWinner = 'tie';
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

function updateScoreMessage(roundWinner, playerSelection, computerSelection) {
    if (roundWinner == 'player') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } 
    if (roundWinner == 'computer') {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    if (roundWinner = 'tie') {
        console.log(`Tie game! ${playerSelection} ties ${computerSelection}`);
    }
}


console.log(`Computer chose: ${computerSelection}`);
console.log(`You chose: ${playerSelection}`);
console.log('');
console.log(`playerScore is ${playerScore}`);
console.log(`computerScore is ${computerScore}`);
console.log(`roundWinner is ${roundWinner}`);