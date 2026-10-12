// 1. Instances of all nodes
let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");

let score1 = document.querySelector("#score--0");
let score2 = document.querySelector("#score--1");

let current1 = document.querySelector("#current--0");
let current2 = document.querySelector("#current--1");

let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnHold = document.querySelector(".btn--hold");
let btnRoll = document.querySelector(".btn--roll");

// 2. declare few variables for internal working
let mainScore1, mainScore2, currentScore, activePlayer, playing;

// 3. New Game Button Functionality
let init = () => {
  // 3.1 set all score to 0
  current1.textContent = 0;
  current2.textContent = 0;
  currentScore = 0;
  mainScore1 = 0;
  mainScore2 = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  activePlayer = 0;
  playing = true;
  // 3.2 set player 1 as active player
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");

  // 3.3 Remove Dice image
  diceEl.classList.add("hidden");
};
init();
let changePlayer = () => {
  document.querySelector(#current--${activePlayer}).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};

//4. Roll Dice button Functionality
let rollDice = () => {
  // 4.1 currently we are playing or not
  if (playing == true) {
    // 4.1.1 Generate a random Number 1-6
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNumber);

    // 4.1.2 Show the random no dice image
    diceEl.src = dice-${randomNumber}.png;
    diceEl.classList.remove("hidden");
    // 4.1.3 if random not 1
    if (randomNumber !== 1) {
      // 4.1.3.1 add random no to current no
      currentScore = currentScore + randomNumber;
      // 4.1.3.1.1 update the current score and show on ui
      document.querySelector(#current--${activePlayer}).textContent =
        currentScore;
    } else {
      // 4.1.4 change the player
      changePlayer();
      // 4.1.4.1 current score should be 0
    }
  }
};

// 5. Hold Button Functinality
let holDice = () => {
  // 5.1 currently we are playing or not
  if (playing == true) {
    // 5.1.1 add curent score to total scvore of active player
    if (activePlayer === 0) {
      mainScore1 = mainScore1 + currentScore;
      score1.textContent = mainScore1;
      if (mainScore1 >= 20) {
        playing = false;
        diceEl.classList.add("hidden");
        player1.classList.add("player--winner");
      } else {
        changePlayer();
      }
    } else {
      mainScore2 = mainScore2 + currentScore;
      score2.textContent = mainScore2;
      if (mainScore2 >= 20) {
        playing = false;
        diceEl.classList.add("hidden");
        player2.classList.add("player--winner");
      } else {
        changePlayer();
      }
    }
  }
};

// Events

btnNew.addEventListener("click", init);
btnRoll.addEventListener("click", rollDice);

btnHold.addEventListener("click", holDice);