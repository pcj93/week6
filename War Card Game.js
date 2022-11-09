//values that I had no idea how to do so made them into arrays
const cardSuits= ["♠", "♣", "♥", "♦"]
const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
const player1Points= []
const player2Points= []
// let playerSum = 0;

//classes that i used for Cards,Deck,Player
class Deck {
    constructor(cards = deckShuffled()){
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length
    }

    // pop(){
    //     return this.cards.shift()
    // }

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

// class Player {
//     constructor(player1, player2){
//         this.player1 = player1
//         this.player2 = player2
//     }
// }
class Player {
    constructor(name){
        this.name = name,
        this.hand = [],
        this.score = 0
    }
}

function deckShuffled(){
    return cardSuits.flatMap(suit => {
       return cardValues.map(value => {
        return new Card(suit, value)
       }) 
    })
}

// function array1(points) {
//     playerSum = array1.reduce((previousValue, currentValue) => {
//       return previousValue + currentValue;
//     });
//     return playerSum;
// }

//cards are being handed out with 26 per player
//startWar()
function startWar(){
const newShoot = new Deck()
newShoot.shuffle()

const midWar = Math.ceil(newShoot.numberOfCards /2)

let playerOne = new Player("Sam")
let playerTwo = new Player ("Pedro")
playerOne.hand = newShoot.cards.slice(0, midWar)
playerTwo.hand = newShoot.cards.slice(midWar, newShoot.numberOfCards)
console.log(playerOne, playerTwo)

  let testCard1 = playerOne
  let testCard2 = playerTwo
 for (let i = 0; i < 26 ; i++) {
     console.log(testCard1.hand[i].value, testCard2.hand[i].value)
    if (testCard1.hand[i].value > testCard2.hand[i].value){
              //console.log(testCard1.hand[i].value, testCard2.hand[i].value)
                testCard1.score += 1
              } else if (testCard2.hand[i].value > testCard1.hand[i].value){
                 //console.log(testCard1,testCard2)
                 testCard2.score += 1
 } else{
    testCard1.hand[i].value == testCard2.hand[i].value
    return "Tie Draw"
 }
 console.log(testCard1.score, testCard2.score)
 }
 }

startWar()