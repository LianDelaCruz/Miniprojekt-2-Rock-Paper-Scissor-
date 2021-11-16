const startBtn = document.getElementById('start-btn'); 
const nameInput = document.getElementById('player-name');
const statusText = document.getElementById('comp-vs'); //name and start button

const rock = document.querySelector('#rock-btn');
const paper = document.querySelector('#paper-btn');
const scissor = document.querySelector('#scissor-btn'); //RPS buttons

const playerScore = document.querySelector('#player-score');
const compScore = document.querySelector('#comp-score'); 
const resultStatus = document.querySelector("#result-status"); //result sections


const ROCK= 'ROCK';
const PAPER= 'PAPER';
const SCISSORS= 'SCISSORS';

let playerChoice;
let compChoice;
let playerWins = 0;
let compWins = 0; //result sections


startBtn.onclick = function(event) {
    event.preventDefault();
    console.log('loading...')
    const playerName = nameInput.value;
    statusText.textContent += playerName;
    document.getElementById('name-label').style.display = 'none';
    nameInput.style.display = 'none';
    startBtn.style.display = 'none';
};


rock.addEventListener('click', function(event){
    event.preventDefault();
    playerChoice = ROCK;
    evaluateResult();
});
paper.addEventListener('click', function(event){
    event.preventDefault();
    playerChoice = PAPER;
    evaluateResult();
}); 
scissor.addEventListener('click', function(event){
    event.preventDefault();
    playerChoice = SCISSORS;
    evaluateResult();
}); 

function evaluateResult(){
    compChoice = getComputerChoice()
    let winner;
    if(playerChoice === compChoice) {
        winner= 'It is a draw!'
    } else if (
        playerChoice === ROCK && compChoice === PAPER ||
        playerChoice === SCISSORS && compChoice === ROCK ||
        playerChoice === PAPER && compChoice === SCISSORS
    ) {
        compWins++
        winner = ''
    } else {
        playerWins++
        winner = ''
    } 

    resultStatus.textContent = `Computer picked ${compChoice} and you picked ${playerChoice}! ${winner}`;
    endRound()
};

function getComputerChoice() {
    const randomValue = Math.random();
    if(randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

function endRound() {
    playerScore.textContent = playerWins;
    compScore.textContent = compWins;
    if (playerWins === 3 ) {
       resultStatus.textContent = 'GAME OVER - you won!'
       alert('YOU WON! RESTART AND MAKE THE COMPUTER CRY AGAIN?')
        restartGame()
    } else  if (compWins === 3 ) {
        resultStatus.textContent = 'GAME OVER - computer won!'
        alert('YOU LOST! Do not cry! Restart?')
        restartGame()
     }
};

function restartGame(){
    playerWins = 0;
    compWins = 0;
    playerScore.textContent = playerWins;
    compScore.textContent = compWins;
    resultStatus.textContent = '';
}

