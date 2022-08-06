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

console.log(`Computer chose: ${computerSelection}`);
console.log(`Player chose: ${playerSelection}`);


if ((playerSelection == undefined) || (playerSelection == null)) {
    console.log(`You lose! Mistypes & esc/Cancel button are not valid.`)
}
if (
    (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper')
) { 
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
}
if (
    (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
    (computerSelection == 'Paper' && playerSelection == 'Rock') ||
    (computerSelection == 'Scissors' && playerSelection == 'Paper')
) { 
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
}
if (
    (playerSelection == 'Rock' && computerSelection == 'Rock') ||
    (playerSelection == 'Paper' && computerSelection == 'Paper') ||
    (playerSelection == 'Scissors' && computerSelection == 'Scissors')
) { 
    console.log(`Tie game! ${playerSelection} ties ${computerSelection}`);
}

