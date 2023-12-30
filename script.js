function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0){
        return "rock";
    } else if (choice == 1){
        return "paper";
    } else return "scissors";
}

function playRound (playerSelection, computerSelection){
    if((playerScore + computerScore) === 5){
        alert((playerScore >= computerScore) ? 'Player wins!' : 'Computer wins');
        return;
    }
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) alert('It\'s a tie!');
    else if((playerSelection === 'rock' && computerSelection ==='paper')
    || (playerSelection === 'paper' && computerSelection === 'scissors')
    || (playerSelection === 'scissors' && computerSelection === 'rock')){
        alert('Computer wins! ' + computerSelection + ' beats ' + playerSelection);
        computerScore++;
    }
    else{
        alert('You win! ' + playerSelection + ' beats ' + computerSelection);
        playerScore++;
    }
}
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => playRound('rock',getComputerChoice()));
paper.addEventListener('click', () => playRound('paper',getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors',getComputerChoice())); 