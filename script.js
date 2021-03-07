'use strict';

/* Create a random number */
let secretNumber = Math.trunc(
  Math.random() * Number(document.querySelector('.maxGuess').textContent) + 1
);
// document.querySelector('.number').textContent = secretNumber;
let scoreAgain = Number(document.querySelector('.score').textContent);
let score = scoreAgain;
// console.log(score, typeof score);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

/* adding an action to the bottun */
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  const range = 5;
  if (!guess) {
    displayMessage('😱 OoOoOoOoOoh, No number was chosen');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Answer');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#6ac1E9';
    document.querySelector('.number').style.width = '30rem';
    // High score
    let highscore = Number(document.querySelector('.highscore').textContent);
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? guess - secretNumber > range
            ? '⏫ Too High'
            : '🔼 High'
          : secretNumber - guess > range
          ? '⏬ Too Low'
          : '🔽 Low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😛😂 You lose the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#d45434';
    }
  }
});

/* Again Button */
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(
    Math.random() * Number(document.querySelector('.maxGuess').textContent) + 1
  );
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = scoreAgain;
  score = scoreAgain;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
