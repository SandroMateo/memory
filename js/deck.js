function Deck() {
  this.pictures = [0,1,2,3,4];
  this.suits = [0,1];
  this.cards = [];
}

Deck.prototype.generateCards = function() {
  for(var i = 0; i < this.pictures.length; i++) {
    for(var j = 0; j < this.suits.length; j++) {
      this.cards.push([i,j]);
    }
  }
  return this.cards;
};

Deck.prototype.shuffleDeck = function() {
  var j, x;
  for (var i = this.cards.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = this.cards[i - 1];
    this.cards[i - 1] = this.cards[j];
    this.cards[j] = x;
  }
  return this.cards;
};

Deck.prototype.winEvaluation = function(matches) {
  if(matches == this.pictures.length) {
    return true;
  } else {
    return false;
  }
}

exports.deckModule = Deck;
