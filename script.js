'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
  message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
  score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guessNumber) {
    displayMessage('⛔ No Number!');

    // When player wins
  } else if (guessNumber === secretNumber) {
    displayMessage('🏆🎉 Correct Number!');
    displayScore(--score);
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    // When player is wrong
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessNumber > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      displayScore(--score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore(score);
  displayMessage('Start guessing...');

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
