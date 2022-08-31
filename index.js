// Cards
let firstCard = 10
let secondCard = 6
let newCard = 3

// Card Status
let cards = [firstCard, secondCard]
let hand = firstCard + secondCard 
aliveStatus = ""
message = ""
showHand = "You have a " + firstCard + " & a " + secondCard

// Messages
let messageEl = document.getElementById("message-el")
let handEl = document.getElementById("hand-el")

// Button toggles
let tapButton = document.getElementById("tapButton")
let playButton = document.getElementById("playButton")
function buttonDisplay() {
    if(aliveStatus === "alive"){
        tapButton.style.display = ""
        playButton.style.display = "none"
    } else if(aliveStatus === "won") {
        tapButton.style.display = "none"
        playButton.style.display = ""
    } else {
        playButton.style.display = ""
        tapButton.style.display = "none"
    }
}

function gameState() {

if (hand < 21) {
    message = "Tap or Hold?"
    aliveStatus = "alive"

} else if(hand === 21){
    message = "You got Blackjack"
    aliveStatus = "won"

} else {
    message = "You busted"
    aliveStatus = "lost"

}
    handEl.textContent = showHand;
    messageEl.textContent = message
    buttonDisplay()
}

function startNewGame() {
    cards = [firstCard, secondCard]
    hand = firstCard + secondCard
    showHand = "Cards: " + firstCard + " " + secondCard
    gameState()
    console.log(cards)
}

function tap() {
    hand += newCard
    cards.push(newCard)
    showHand += " " + newCard
    gameState()
    console.log(cards)
}