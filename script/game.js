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
    console.log(gameStarted);
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

function guessNumber() {
  console.log(gameStarted);
  if (guessedNumber !== randomNumber) {
    guesses--;
    console.log(guesses);
    if (guesses > 0) {
      guessedNumber = Number(document.getElementById("guessedNumber").value);
      document.getElementById("guessed").textContent = guessedNumber;

      document.getElementById("guesses").textContent = guesses;
      if (guessedNumber < randomNumber) {
        console.log("Too low, try again!");
      } else {
        console.log("Too high, try again!");
      }
    } else {
      document.getElementById("random-num").textContent = randomNumber;
      guessedNumber = Number(document.getElementById("guessedNumber").value);
      console.log("You lost, try again");
      gameStarted = false;
      document.getElementById("guesses").textContent = guesses;
    }
  } else {
    console.log("Congratulations!");
    gameStarted = false;
  }
}
