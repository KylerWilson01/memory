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
                  <img class="card" src="images/condiments.jpeg">
                  </div>
                  <div class="back card">
                    <img class="card" src='${card.image}'>
                  </div> 
                </div>
      `
    })

    document.querySelector('#board').innerHTML = board
  }
}

