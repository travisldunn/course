// Design a standard 52 card deck using object oriented design principles.

// 1) How do you account for a card or pile of cards being turned upside down ?
// 2) How do you implement  a shuffle method ?
// 3) How to handle player’s hands and piles of cards that are discarded ?

class Card {
  constructor([value, gameValue], suit) {
    this.value = value;
    this.gameValue = gameValue;
    this.suit = suit;
    this.revealed = false;
  }

  flipCard() {
    this.revealed = !this.revealed;
  }
}

class Deck {
  constructor() {
    const suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
    const values = [
      [1, "Ace"],
      [2, "2"],
      [3, "3"],
      [4, "4"],
      [5, "5"],
      [6, "6"],
      [7, "7"],
      [8, "8"],
      [9, "9"],
      [10, "10"],
      [11, "Jack"],
      [12, "Queen"],
      [13, "King"],
    ];
    this.cards = [];

    for (let s of suits) {
      for (let v of values) this.cards.push(new Card(v, s));
    }
  }

  shuffle() {
    let i = this.cards.length;
    while (i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal() {
    return this.cards.length ? this.cards.pop() : null;
  }

  returnCard(card) {
    if (card.isRevealed()) card.flipCard();
    this.cards.unshift(card);
  }
}

let deck = new Deck();
card = deck.deal();
deck.shuffle();
