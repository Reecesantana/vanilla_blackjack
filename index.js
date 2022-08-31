// Cards
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

let player = {
    cards : [],
    chips : 0,
}

let dealer = {
    cards : []
}

// Card Status
aliveStatus = ""
message = ""

// Messages
let messageEl = document.getElementById("message-el")
let handEl = document.getElementById("hand-el")
let dealerEl = document.getElementById("dealer-el")

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
    for (let i = 0; i < player.cards.length; i++ ) {
        handEl.textContent += player.cards[i] + " "
    }
    dealerEl.textContent = "Dealer: "
    for (let i = 0; i < dealer.cards.length; i++ ) {
        dealerEl.textContent += dealer.cards[i] + " "
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
    buttonDisplay()
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let dealerTopCard = getRandomCard()
    dealer.cards = [dealerTopCard]
    player.cards = [firstCard, secondCard]
    hand = firstCard + secondCard
    gameState()
    console.log(player.cards)
    
}

function tap() {
    let newCard = getRandomCard()
    hand += newCard
    player.cards.push(newCard)
    gameState()
    console.log(player.cards)
   
}
