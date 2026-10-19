let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

const playBtn = document.querySelector("#play-button");
const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");
const newCardBtn = document.querySelector("#new-card-button");


function getRandomCard() {
    return Math.floor( Math.random() * 13 ) + 1;
}

function startGame() { 
    renderGame()
}

function renderGame() {
    
    cardsEl.textContent = "Cards: " + cards.join(", ")
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

function drawNewCard() {
    let newCard = getRandomCard()
    sum += newCard;
    cards.push(newCard)
    renderGame();
}


