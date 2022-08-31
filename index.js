// Cards
let deck = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"]

function getRandomCard() {
    let card = Math.floor(Math.random() * 13) + 1
    if(card === 1) {
        return card = 11
    } else if(card > 10) {
        return card = 10
    } else {
        return card
    }
    
}



// Card Status
aliveStatus = ""
message = ""


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

    handEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++ ) {
        handEl.textContent += cards[i] + " "
    }


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
    messageEl.textContent = message
    buttonDisplay()
    getRandomCard()

}

function startNewGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    hand = firstCard + secondCard

    gameState()
    console.log(cards)
    
}

function tap() {
    let newCard = getRandomCard()
    hand += newCard
    cards.push(newCard)
    gameState()
    console.log(cards)
}
