// Design a standard 52 card deck using object oriented design principles.

// 1) How do you account for a card or pile of cards being turned upside down ?
// 2) How do you implement  a shuffle method ?
// 3) How to handle player’s hands and piles of cards that are discarded ?

class Card {
  constructor(suit, [value, gameValue]) {
    this.suit = suit;
    this.value = value;
    this.gameValue = gameValue;
  }
}

class Deck {
  constructor() {
    const suits = ["clubs", "diomonds", "spades", "hearts"],
      values = [
        [1, "ace"],
        [2, "2"],
        [3, "3"],
        [4, "4"],
        [5, "5"],
        [6, "6"],
        [7, "7"],
        [8, "8"],
        [9, "9"],
        [10, "10"],
        [11, "jack"],
        [12, "queen"],
        [13, "king"],
      ];
    this.cards = [];
    for (let s of suits) {
      for (let v of values) this.cards.push(new Card(s, v));
    }
  }

  shuffle() {
    let i = this.cards.length,
      j;
    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal() {
    if (this.cards.length) return this.cards.pop();
  }
}

const deck = new Deck();
deck.shuffle();
console.log(deck);
