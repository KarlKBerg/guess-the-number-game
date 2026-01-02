/* ===== VARIABLES ===== */
// Show info
let info = true;
// Difficulty select
let diff = "normal";
let guesses = 10;
// Game started
let gameStarted = false;

// Game core
let guessedNumber = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;

//Hide-show start button and game screen
// Start game
function startGame() {
  document.getElementById("guesses").textContent = guesses;
  gameStarted = true;
  if (gameStarted) {
    let startGameBtn = document.getElementById("start-game-btn");
    let gameScreen = document.getElementById("game-started");
    // Button
    startGameBtn.classList.add("hidden");
    startGameBtn.classList.remove("start-game-btn");
    // Game screen
    gameScreen.classList.add("game-started");
    gameScreen.classList.remove("hidden");
  } else {
    let startGameBtn = document.getElementById("start-game-btn");
    let gameScreen = document.getElementById("game-started");
    gameStarted = false;
    startGameBtn.classList.remove("hidden");
    startGameBtn.classList.add("start-game-btn");
    // Game screen
    gameScreen.classList.remove("game-started");
    gameScreen.classList.add("hidden");
  }
}

// Toggle info
function showHideInfo() {
  if (info) {
    let infoScreen = document.getElementById("game-rules");
    infoScreen.classList.add("hidden");
    info = false;
  } else {
    info = true;
  }
}
// Sett difficulty
const diffBtnEasy = document.getElementById("easy");
const diffBtnNormal = document.getElementById("normal");
const diffBtnHard = document.getElementById("hard");

diffBtnEasy.addEventListener("click", () => {
  diff = "easy";
  difficulty();
});

diffBtnNormal.addEventListener("click", () => {
  diff = "normal";
  difficulty();
});

diffBtnHard.addEventListener("click", () => {
  diff = "hard";
  difficulty();
});

function difficulty() {
  gameStarted = false;
  const diffText = document.getElementById("diff-text");

  diffBtnEasy.classList.remove("selected");
  diffBtnNormal.classList.remove("selected");
  diffBtnHard.classList.remove("selected");

  if (diff === "easy") {
    guesses = 20;
    diffBtnEasy.classList.add("selected");
    diffText.textContent = "Difficulty: Easy";
  } else if (diff === "normal") {
    guesses = 10;
    diffBtnNormal.classList.add("selected");
    diffText.textContent = "Difficulty: Normal";
  } else {
    guesses = 5;
    diffBtnHard.classList.add("selected");
    diffText.textContent = "Difficulty: Hard";
  }
}

function guessNumber() {
  if (!gameStarted) return;
  const hint = document.getElementById("hint");
  if (guessedNumber !== randomNumber) {
    guesses--;
    if (guesses > 0) {
      guessedNumber = Number(document.getElementById("guessedNumber").value);
      document.getElementById("guessed").textContent = guessedNumber;

      document.getElementById("guesses").textContent = guesses;
      if (guessedNumber < randomNumber) {
        hint.textContent = "Too low, try again!";
      } else {
        hint.textContent = "Too high, try again!";
      }
    } else {
      document.getElementById("random-num").textContent = randomNumber;
      guessedNumber = Number(document.getElementById("guessedNumber").value);
      hint.textContent = "You lost, try again";
      gameStarted = false;
      document.getElementById("guesses").textContent = guesses;
    }
  } else {
    hint.textContent = "Congratulations!";
    gameStarted = false;
  }
}
