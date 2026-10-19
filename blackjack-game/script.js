let firstCard = 7
let secondCard = 3
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

const playBtn = document.getElementById("play-button");

function playGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack."
        hasBlackJack = true
    } else { // sum > 21
        message = "Game over."
        isAlive = false
    }
}


console.log(message)