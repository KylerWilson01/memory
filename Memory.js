class Memory {
  constructor() {
    this.display = new Display([]);
    this.deck = []
  }

  newGame() {
    var deck = new Deck()
    deck.create()
    deck.shuffle()
    this.displaying(deck.deck)
  }

  log() {
    console.log(this.display.hand)
  }

  displaying(card) {
    card.forEach(card => {
      this.display.setDisplay(card)
    })
  }

  deal() {
    var board = ''

    this.display.hand.forEach(card => {
      board += `<div class="cards">
                  <div class="front card">
                    Front 
                  </div>
                  <div class="back card ${card.suit}">
                    ${card.number}&${card.suit};
                  </div> 
                </div>
      `
    })

    document.querySelector('#board').innerHTML = board
  }
}

