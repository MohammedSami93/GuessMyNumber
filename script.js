'use strict';

/* Create a random number */
let secretNumber = Math.trunc(
  Math.random() * Number(document.querySelector('.maxGuess').textContent) + 1
);

let upComments = [
  'بعيد واجد، اختار رقم تحت',
  'الله يخلف على عقلك، تحت تحححححت',
  'مسكييييييين 😂 تحت تححححت للطريق المنحدرة',
  'اتحدااااااااااك 🤣 بس يلا بساعدك واختار رقم تحححححححت',
  'يا رجال ما وراك فوز 😛 اختار بعد تحت واجد',
  'وينك وين، بعيييد. اختار رقم اقل',
  'والله انك تكسر الخاطر 😂 تحت تحت',
  '🤦🏼‍♂️ بعد تحت كثير',
];

let upCloseComments = [
  'قرررررررربت، بعد رقم أو رقمين أقل',
  'باقي لك تكه، بعد اقل اشوي',
  'اشوي بعد تحت 🤏🏼',
];

let downComments = [
  'بعيد واجد، اختار رقم فوق',
  'الله يخلف على عقلك، فووووووق فووووووق',
  'مسكييييييين 😂 فوووووووق فوووووووووق أعلى',
  'اتحدااااااااااك 🤣 بس يلا بساعدك واختار رقم فوووووووق',
  'يا رجال ما وراك فوز 😛 اختار بعد فوق واجد',
  'وينك وين، بعيييد. اختار رقم أعلى',
  'والله انك تكسر الخاطر 😂 فوق أعلى',
  'انت ذاهب إلى الطريق المنحدرة، اختار فوق بعد',
  '🤦🏼‍♂️ بعد فوق كثير',
];

let downCloseComments = [
  'قرررررررربت، بعد رقم أو رقمين أعلى',
  'باقي لك تكه، بعد فوق اشوي',
  'اشوي بعد فوق 🤏🏼',
];

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
    displayMessage('اختار رقم يا العجل 😒');
  } else if (guess === secretNumber) {
    displayMessage('كفوووووووو والله 👏🏼');
    let src = 'sounds/clap.mp3';
    let audio = document.createElement('audio');
    audio.src = src;
    audio.play();
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
            ? upComments[Math.floor(Math.random() * upComments.length)]
            : upCloseComments[
                Math.floor(Math.random() * upCloseComments.length)
              ]
          : secretNumber - guess > range
          ? downComments[Math.floor(Math.random() * downComments.length)]
          : downCloseComments[
              Math.floor(Math.random() * downCloseComments.length)
            ]
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😛😂 فااااااااااااشل');
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
  displayMessage('أبدأ اللعب ...');
  document.querySelector('.score').textContent = scoreAgain;
  score = scoreAgain;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
