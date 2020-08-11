// Design a standard 52 card deck using object oriented design principles.

// 1) How do you account for a card or pile of cards being turned upside down ?
// 2) How do you implement  a shuffle method ?
// 3) How do they do about handling player’s hands and piles of cards that are discarded ?

class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
    this.revealed = false;
  }

  getValue() {
    return this.value;
  }

  getSuit() {
    return this.suit;
  }

  getGameValue() {
    const lib = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];
    return this.lib[this.value];
  }

  isRevealed() {
    return this.revealed;
  }

  flipCard() {
    this.revealed = this.revealed ? false : true;
  }
}

class Deck {
  constructor() {
    this.storage = [];

    let suits = ["Diamonds", "Clubs", "Hearts", "Spades"];

    for (let i = 0; i < suits.length; i++) {
      for (let value = 1; value < 14; value++) {
        this.storage.push(new Card(value, suits[i]));
      }
    }
  }

  size() {
    return this.storage.length;
  }

  swap(i1, i2) {
    [this.storage[i1], this.storage[i2]] = [this.storage[i2], this.storage[i1]];
  }

  shuffle() {
    let i = this.size();

    while (i--) {
      let swapIndex = Math.floor(Math.random() * (i + 1));
      this.swap(i, swapIndex);
    }
  }

  deal() {
    if (this.size() > 0) {
      return this.storage.pop();
    } else {
      return null;
    }
  }

  returnCard(card) {
    if (card.isRevealed()) {
      card.flipCard();
    }
    this.storage.unshift(card);
  }
}
