const choices = document.getElementById('choices');
const yourChoice = document.getElementById('your-choice');
const opponentChoice = document.getElementById('computer-choice');
const yourScoreDisplay = document.getElementById('your-score');
const opponentScoreDisplay = document.getElementById('computer-score');
const message = document.getElementById('message');
const winner = document.getElementById('winner');
let you;
let opponent;
let yourScore = 0;
let opponentScore = 0;


const possibleChoice = ['rock', 'paper', 'scissors'];

window.onload = () => {
  for (let i = 0; i < 3; i++) {
    let choice = document.createElement('img');
    choice.id = possibleChoice[i];
    choice.src = possibleChoice[i] + ".png"
    choice.addEventListener('click', selectChoice);
    choices.append(choice);
  }
}

function winCondition() {
  if ((you == 'rock' && opponent == 'scissors') || (you == 'paper' && opponent == 'rock') || 
  (you == 'scissors' && opponent == 'paper')) {
    return true;
  }
}

function selectChoice() {
  you = this.id;
  yourChoice.src = you + '.png';

  opponent = possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
  opponentChoice.src = opponent + ".png";

  if (you == opponent) {
    yourScore = yourScore;
    opponentScore = opponentScore;
    message.innerHTML = 'It\'s a draw!'
  } else if (winCondition()) {
    yourScore++;
    if (you == 'rock' && opponent == 'scissors') {
      message.innerHTML = 'Rock crushes Scissors, your point!'
    } else if (you == 'paper' && opponent == 'rock') {
      message.innerHTML = 'Paper covers Rock, your point!'
    } else if (you == 'scissors' && opponent == 'paper') {
      message.innerHTML = 'Scissors cut Paper, your point!'
    }
  } else {
    opponentScore++;
     if (you == 'scissors' && opponent == 'rock') {
      message.innerHTML = 'Rock crushes Scissors, computer\'s point!'
    } else if (you == 'rock' && opponent == 'paper') {
      message.innerHTML = 'Paper covers Rock, computer\'s point!'
    } else if (you == 'paper' && opponent == 'scissors') {
      message.innerHTML = 'Scissors cut Paper, computer\'s point!'
    }
  }

  yourScoreDisplay.innerHTML = yourScore;
  opponentScoreDisplay.innerHTML = opponentScore;

  if (opponentScore === 5) {
    winner.style.zIndex = 10;
    winner.style.opacity = 1;
    winner.innerHTML = 'You Lose!';
    window.setTimeout(function(){location.reload()},3000)
  } else if (yourScore === 5) {
    winner.style.zIndex = 10;
    winner.style.opacity = 1;
    winner.innerHTML = 'You Win!';
    window.setTimeout(function(){location.reload()},3000)
  }
}

