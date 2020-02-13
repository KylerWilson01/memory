class Deck {
  constructor() {
    this.deck = []
  }

  create() {
    const num = [1, 2, 3]
    const suits = ['hearts', 'spades', 'diams']

    num.forEach(num => {
      suits.forEach(suit => {
        this.deck.push(new Card(num, suit))
        this.deck.push(new Card(num, suit))
      })
    })
  }

  shuffle() {
    var currentIndex = this.deck.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.deck[currentIndex];
      this.deck[currentIndex] = this.deck[randomIndex];
      this.deck[randomIndex] = temporaryValue;
    }
  }
}