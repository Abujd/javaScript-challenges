const againBtn = document.querySelector(".again");
const scoreCopy = document.querySelector(".score");
const highscoreCopy = document.querySelector(".highscore");
const checkBtn = document.querySelector(".check");
const messageCopy = document.querySelector(".message");

let score = 20;
let highscore = 0;
let randomScoreValue;


const scoreCopiesMap = {
  tooHigh: "Score is too high",
  tooLow: "Score is too low",
  winner: "🎉 Correct Number!",
};

initializeGame();

againBtn.addEventListener("click", restartTheGame);
checkBtn.addEventListener("click", checkTheScore);

function initializeGame() {
  resetValues();
  generateRandomScore();
}

function generateRandomScore() {
  randomScoreValue = Math.floor(Math.random() * 21);
}

function restartTheGame() {
  checkBtn.disabled = false;
  generateRandomScore();
  resetValues();
  messageCopy.innerHTML = "Start guessing...";
}

function resetValues() {
  score = 20;
  scoreCopy.innerHTML = 20;
  updateHighScore();
}

function checkTheScore() {
  if (score === 0) {
    checkBtn.disabled = true;
    messageCopy.innerHTML = "You Lost the game";
  }

  const guessInput = Number(document.querySelector(".guess").value);


  if (!guessInput) {
    messageCopy.innerHTML = "Please enter a value first";
  }

  if (guessInput === randomScoreValue) {
    updateHighScore();
    checkBtn.disabled = true;
    messageCopy.innerHTML = scoreCopiesMap["winner"];
    return
  }

  score--;
  scoreCopy.innerHTML = score;

  if (guessInput < randomScoreValue) {
    messageCopy.innerHTML = scoreCopiesMap["tooLow"];
  } else {
    messageCopy.innerHTML = scoreCopiesMap["tooHigh"];
  }
}

function updateHighScore() {
  if (score > highscore) {
    highscore = score;
    highscoreCopy.innerHTML = score;
  }
}
