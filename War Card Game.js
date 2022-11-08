//values that I had no idea how to do so made them into arrays
const cardSuits= ["♠", "♣", "♥", "♦"]
const cardValues = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
const player1Points= []
const player2Points= []
const playerSum = 0;

//classes that i used for Cards,Deck,Player
class Deck {
    constructor(cards = deckShuffled()){
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length
    }

    pop(){
        return this.cards.shift()
    }

    push(card){
        this.cards.push(card)
    }
    

   shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i + 1))
        const oldValue = this.cards[newIndex]
        this.cards[newIndex] = this.cards[i]
        this.cards[i] = oldValue
    }
   } 
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

class Player {
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }
}

function deckShuffled(){
    return cardSuits.flatMap(suit => {
       return cardValues.map(value => {
        return new Card(suit, value)
       }) 
    })
}

//cards are being handed out with 26 per player
startWar()
function startWar(){
const newShoot = new Deck()
newShoot.shuffle()

const midWar = Math.ceil(newShoot.numberOfCards /2)
player1 = new Deck(newShoot.cards.slice(0, midWar))
player2 = new Deck(newShoot.cards.slice(midWar, newShoot.numberOfCards))
console.log(player1,player2)
}

let playerOneCard = this.player1.pop();
let playerTwoCard = this.player2.pop();
for (let i = 1; i <= 26 ; i++) {
    console.log (playerOneCard,playerTwoCard)
}
