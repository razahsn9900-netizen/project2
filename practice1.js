'use strict';


// ==========================================
// VARIABLES
// ==========================================

// Total score of Player 1 and Player 2
let scores = [0, 0];

// Temporary/current score
let currentScores = [0, 0];

// 0 = Player 1
// 1 = Player 2
let activePlayer = 0;

// Game status
let playing = true;


// ==========================================
// SELECT HTML ELEMENTS
// ==========================================

const dice = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');

const btnHold = document.querySelector('.btn--hold');

const btnNew = document.querySelector('.btn--new');


// ==========================================
// DICE DOTS
// ==========================================

const dots = document.querySelectorAll('.dice span');


// ==========================================
// FUNCTION TO SHOW DICE
// ==========================================

function showDice(number) {

    // First hide all dots
    dots.forEach(function (dot) {
        dot.style.visibility = 'hidden';
    });


    // Dice patterns
    const patterns = {

        1: [5],

        2: [1, 9],

        3: [1, 5, 9],

        4: [1, 3, 7, 9],

        5: [1, 3, 5, 7, 9],

        6: [1, 3, 4, 6, 7, 9]
    };


    // Show required dots
    patterns[number].forEach(function (position) {

        dots[position - 1].style.visibility = 'visible';

    });
}


// ==========================================
// FUNCTION TO SWITCH PLAYER
// ==========================================

function switchPlayer() {

    // Current player's score becomes 0
    currentScores[activePlayer] = 0;

    // Display 0
    document.querySelector(
        `#current--${activePlayer}`
    ).textContent = 0;


    // Remove active player class
    document.querySelector(
        `.player--${activePlayer}`
    ).classList.remove('player--active');


    // Switch player
    activePlayer = activePlayer === 0 ? 1 : 0;


    // Add active player class
    document.querySelector(
        `.player--${activePlayer}`
    ).classList.add('player--active');
}


// ==========================================
// ROLL DICE
// ==========================================

btnRoll.addEventListener('click', function () {

    // If game is finished, stop
    if (!playing) return;


    // Generate random number from 1 to 6
    const diceNumber =
        Math.trunc(Math.random() * 6) + 1;


    // Show dice
    dice.classList.remove('hidden');


    // Display dice number
    showDice(diceNumber);


    // ======================================
    // IF DICE IS NOT 1
    // ======================================

    if (diceNumber !== 1) {

        // Add dice number to current score
        currentScores[activePlayer] += diceNumber;


        // Display current score
        document.querySelector(
            `#current--${activePlayer}`
        ).textContent =
            currentScores[activePlayer];

    }


    // ======================================
    // IF DICE IS 1
    // ======================================

    else {

        // Player loses current score
        // and turn changes
        switchPlayer();
    }

});


// ==========================================
// HOLD BUTTON
// ==========================================

btnHold.addEventListener('click', function () {

    // If game is finished, stop
    if (!playing) return;


    // Add current score to total score
    scores[activePlayer] +=
        currentScores[activePlayer];


    // Display total score
    document.querySelector(
        `#score--${activePlayer}`
    ).textContent =
        scores[activePlayer];


    // ======================================
    // CHECK WINNER
    // ======================================

    if (scores[activePlayer] >= 100) {

        // Game ends
        playing = false;


        // Add winner class
        document.querySelector(
            `.player--${activePlayer}`
        ).classList.add('player--winner');


        // Remove active class
        document.querySelector(
            `.player--${activePlayer}`
        ).classList.remove('player--active');


        // Hide dice
        dice.classList.add('hidden');

    }


    // ======================================
    // IF PLAYER HAS NOT WON
    // ======================================

    else {

        // Switch player
        switchPlayer();
    }

});


// ==========================================
// NEW GAME
// ==========================================

btnNew.addEventListener('click', function () {

    // Reset total scores
    scores = [0, 0];


    // Reset current scores
    currentScores = [0, 0];


    // Player 1 starts
    activePlayer = 0;


    // Game starts
    playing = true;


    // Reset Player 1 total score
    document.querySelector('#score--0').textContent = 0;


    // Reset Player 2 total score
    document.querySelector('#score--1').textContent = 0;


    // Reset Player 1 current score
    document.querySelector('#current--0').textContent = 0;


    // Reset Player 2 current score
    document.querySelector('#current--1').textContent = 0;


    // Remove active class
    document.querySelector(
        '.player--0'
    ).classList.remove('player--active');

    document.querySelector(
        '.player--1'
    ).classList.remove('player--active');


    // Remove winner class
    document.querySelector(
        '.player--0'
    ).classList.remove('player--winner');

    document.querySelector(
        '.player--1'
    ).classList.remove('player--winner');


    // Player 1 becomes active
    document.querySelector(
        '.player--0'
    ).classList.add('player--active');


    // Hide dice
    dice.classList.add('hidden');

});