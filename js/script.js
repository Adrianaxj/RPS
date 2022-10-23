
const gameResult = document.querySelector('#result');
const currentScore = document.querySelector('#score');

let computerChoice;
let score;
let playerChoice;

const ROCK = 0;
const SCISSORS = 1;
const PAPER = 2;

//Sätta upp spelplanen
function initGame(){
    score = 0;
    currentScore.innerHTML = score;
    const rockbtn = document.querySelector('.rock');
    const scissorsbtn = document.querySelector('.scissors');
    const paperbtn = document.querySelector('.paper');

    rockbtn.addEventListener('click', () => {
        playerChoice = ROCK;
        getChoice();
        checkWinner();
    });

    scissorsbtn.addEventListener('click', () => {
        playerChoice = SCISSORS;
        getChoice();
        checkWinner();
    });

    paperbtn.addEventListener('click', () => {
        playerChoice = PAPER;
        getChoice();
        checkWinner();
    });4
} 
initGame();

function getChoice(){
    computerChoice = Math.floor(Math.random() * 3);
}
    
function checkWinner(){
    if(playerChoice == computerChoice){
        gameResult.innerHTML = 'Draw!';
    }
    else if(computerChoice == ROCK && playerChoice == PAPER) {
        gameResult.innerHTML = 'You Win!';
        score++;
    }
    else if(computerChoice == PAPER && playerChoice == SCISSORS) {
        gameResult.innerHTML = 'You Win!';
        score++;
    }
    else if(computerChoice == SCISSORS && playerChoice == ROCK) {
        gameResult.innerHTML = 'You Win!';
        score++;
    } else {
        gameResult.innerHTML = 'You Lose!';
    }

    currentScore.innerHTML = score;
}









