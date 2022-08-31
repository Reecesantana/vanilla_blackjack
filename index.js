let card1 = 10
let card2 = 10

let hand = card1 + card2 

aliveStatus = ""



message = ""

let messageEl = document.getElementById("message-el")

let handEl = document.getElementById("hand-el")


function tap() {
    console.log("draw")
}


function startGame() {



    let buttonDisplay = document.getElementById("playButton")
    buttonDisplay.style.display = "none"

    // let tapButton = document.getElementById(tapButton)

if (hand < 21) {
    message = "Tap or Hold?"
    aliveStatus = "alive"
    // tapButton.style.display = "block"

} else if(hand === 21){
    message = "You got Blackjack"
    aliveStatus = "won"

} else {
    message = "You busted"
    aliveStatus = "lost"

}
    handEl.textContent = "Your hand is a " + card1 + " & a " + card2;
    messageEl.textContent = message

}


