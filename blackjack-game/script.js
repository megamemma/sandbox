
let cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message = ""

const player = {
    name: "Boriska",
    chips: 145,
}

const playerEl = document.querySelector("#player-info-el")
playerEl.textContent = player.name + ": $" + player.chips;

const playBtn = document.querySelector("#play-button");
const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");
const newCardBtn = document.querySelector("#new-card-button");


function getRandomCard() {
    let result = Math.floor( Math.random() * 13 ) + 1;
    if (result === 11) {
        return 1
    } else if (result >= 11 && result <= 13) {
        return 10
    } else {
        return result
    }
    // Jack, Queen, King - all return 10. Ace return 1, 11 (in my game, only 11 yet.)
}

function startGame() { 
    isAlive = true
    for (let i = 0; i < cards.length; i++) {
        getRandomCard();
        cards.push(result);
        sum += result;
    }
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
        messageEl.style.color = "red";
        isAlive = false
    }
    messageEl.textContent = message;
}

function drawNewCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum += newCard;
        cards.push(newCard)
        renderGame();
    }
}


