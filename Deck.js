class Deck {
  constructor() {
    this.deck = []
  }

  create() {
    let images = [
      {
        name: 'ketchup',
        image: 'images/ketchup.jpg'
      },
      {
        name: 'mustard',
        image: 'images/mustard.jpeg'
      },
      {
        name: 'relish',
        image: 'images/relish.jpeg'
      },
      {
        name: 'mayo',
        image: 'images/mayo.jpeg'
      },
      {
        name: 'salt',
        image: 'images/salt.jpeg'
      },
      {
        name: 'pepper',
        image: 'images/black-pepper.jpeg'
      },
      {
        name: 'soy-sauce',
        image: 'images/soy-sauce.jpeg'
      },
      {
        name: 'wasabi',
        image: 'images/wasabi.jpeg'
      },
      {
        name: 'horseradish',
        image: 'images/horseradish.jpeg'
      }
    ]

    images.forEach(con => {
      this.deck.push(new Card(con.image, con.name))
      this.deck.push(new Card(con.image, con.name))
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