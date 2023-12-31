function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0){
        return "rock";
    } else if (choice == 1){
        return "paper";
    } else return "scissors";
}

function playRound (playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        createRoundResult('It\'s a tie!');
        currRound++;
    }
    else if((playerSelection === 'rock' && computerSelection ==='paper')
    || (playerSelection === 'paper' && computerSelection === 'scissors')
    || (playerSelection === 'scissors' && computerSelection === 'rock')){
        computerScore++;
        createRoundResult('Computer wins! ' + computerSelection + ' beats ' + playerSelection);
        currRound++;
    }
    else{
        playerScore++;
        createRoundResult('You win! ' + playerSelection + ' beats ' + computerSelection);
        currRound++;
    }
    if(playerScore === 3 || computerScore === 3){
        alert((playerScore >= computerScore) ? 'Player wins!' : 'Computer wins!');
        resetGame();
        return;
    }
}

function createRoundResult(message){
    const newResult = document.createElement('li');
    newResult.textContent = 'Round ' + currRound + ': ' + message + '. Player\'s score: ' + playerScore + '/Computer\'s score: ' + computerScore;
    results.appendChild(newResult);
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    currRound = 1;
    results.replaceChildren('Results: ');
}
let playerScore = 0;
let computerScore = 0;
let currRound = 1;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const restart = document.querySelector('#restart');
const results = document.querySelector('li');

rock.addEventListener('click', () => playRound('rock',getComputerChoice()));
paper.addEventListener('click', () => playRound('paper',getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors',getComputerChoice())); 

restart.addEventListener('click', () => resetGame());