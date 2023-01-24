let secretNumber = 0;
let score = 10;
let difficulty = 'easy'
let history = []; // array of objects of the form {guess: 0, score: 0}

const againButton = document.getElementById("againBtn");
const checkBtn = document.getElementById("checkBtn");
const scoreField = document.getElementById("score");
const message = document.getElementById("message");
const numberBox = document.getElementById("numberBox");
const easyBtn = document.getElementById("easyBtn");
const medBtn = document.getElementById("medBtn");
const hardBtn = document.getElementById("hardBtn");
const betweenBox = document.getElementById("between");
const guessMyNumberText = document.getElementById("guessMyNumberText");

scoreField.innerHTML = score;
secretNumber = Math.trunc(Math.random() * 20) + 1;
easyBtn.style.border = '4px solid rgb(61, 56, 134)'
medBtn.style.border = ''
hardBtn.style.border = ''

easyBtn.addEventListener("click", async () => {
  easyBtn.style.border = '4px solid rgb(61, 56, 134)'
  medBtn.style.border = ''
  hardBtn.style.border = ''

  betweenBox.innerHTML = "(between 1 and 20)";
  difficulty = 'easy'
  score = 10;
  scoreField.innerHTML = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.innerHTML = "Start guessing...";
  checkBtn.style.display = "Block";
  message.style.color = "RED";
  numberBox.innerHTML = "?";
  document.body.style.backgroundColor = "";
});

medBtn.addEventListener("click", async () => {
  easyBtn.style.border = ''
  medBtn.style.border = '4px solid rgb(61, 56, 134)'
  hardBtn.style.border = ''

  betweenBox.innerHTML = "(between 1 and 50)";
  difficulty = 'medium'
  score = 5;
  scoreField.innerHTML = score;
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  message.innerHTML = "Start guessing...";
  checkBtn.style.display = "Block";
  message.style.color = "RED";
  numberBox.innerHTML = "?";
  document.body.style.backgroundColor = "";
});

hardBtn.addEventListener("click", async () => {
  easyBtn.style.border = ''
  medBtn.style.border = ''
  hardBtn.style.border = '4px solid rgb(61, 56, 134)'

  betweenBox.innerHTML = "(between 1 and 100)";
  difficulty = 'hard'
  score = 5;
  scoreField.innerHTML = score;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  message.innerHTML = "Start guessing...";
  checkBtn.style.display = "Block";
  message.style.color = "RED";
  numberBox.innerHTML = "?";
  document.body.style.backgroundColor = "";
});

checkBtn.addEventListener("click", async (btn) => {
  calcAnswer();
});

checkBtn.addEventListener("keypress", async (key) => {
  if (key.code == "Enter" || key.code == "NumpadEnter") {

    calcAnswer();
  }
});

againButton.addEventListener("click", async () => {
  again();
});

document.addEventListener("keypress", async (key) => {
  if (key.code == "KeyR") {
    again();
  } else if (key.code == "Enter" || key.code == "NumpadEnter") {
    calcAnswer();
  }
});

function again() {
  const guessBox = document.getElementById("guessBox");
  guessBox.value = "";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  scoreField.innerHTML = score;
  message.innerHTML = "Start guessing...";
  checkBtn.style.display = "Block";
  message.style.color = "RED";
  numberBox.innerHTML = "?";
  document.body.style.backgroundColor = "";
}

function calcAnswer() {
  const guessBox = document.getElementById("guessBox");
  const guessedNumber = guessBox.value;

  if (score > 1) {
    if (guessedNumber < secretNumber) {
      score -= 1;
      message.innerHTML = "Too low!";
    } else if (guessedNumber > secretNumber) {
      score -= 1;
      message.innerHTML = "Too high!";
    } else {
      guessMyNumberText.innerHTML = "The number is:";
      message.innerHTML = "Correct Number!";
      checkBtn.style.display = "None";
      message.style.color = "BLACK";
      numberBox.innerHTML = secretNumber;
      document.body.style.backgroundColor = "#9967db";
    }
  } else {
    guessMyNumberText.innerHTML = "The number was:";
    numberBox.innerHTML = secretNumber;
    message.innerHTML = "You lost";
    score = 0;
    checkBtn.style.display = "None";
    guessBox.value = "";
    document.body.style.backgroundColor = "#e60b4d";
  }
  scoreField.innerHTML = score;
  guessBox.value = "";
}