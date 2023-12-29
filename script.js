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
    if (playerSelection === computerSelection) return 0;
    else if((playerSelection === 'rock' && computerSelection ==='paper')
    || (playerSelection === 'paper' && computerSelection === 'scissors')
    || (playerSelection === 'scissors' && computerSelection === 'rock')) return 1;
    else return 2;
}

function game(){
    const numGames = 5;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < numGames; i++){
        let playerSelection = prompt('Enter rock, paper, or scissors');
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result === 0){
            console.log('It\'s a tie!');
        }
        else if (result === 1){
            console.log('Computer wins! ' + computerSelection + ' beats ' + playerSelection);
            computerScore++;
        }
        else {
            console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
            playerScore++;
        }
    }

    console.log((playerScore >= computerScore) ? 'Player wins!' : 'Computer wins');
}

game();