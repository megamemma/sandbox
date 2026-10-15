let firstCard = 7
let secondCard = 3
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("You've got Blackjack.")
} else { //sum > 21
    console.log("Game over.")
}