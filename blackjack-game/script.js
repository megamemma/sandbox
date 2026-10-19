let firstCard = 7
let secondCard = 3
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

const playBtn = document.querySelector("#play-button");
const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard
    sumEl.textContent = "Sum: " + sum
    
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack."
        hasBlackJack = true
    } else { // sum > 21
        message = "Game over."
        isAlive = false
    }

    messageEl.textContent = message;
}


