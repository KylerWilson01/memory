class Card {
  constructor(num, suit) {
    this.number = num
    this.suit = suit

    if (typeof this.number === "number") {
      this.value = this.number
    }
  }
}