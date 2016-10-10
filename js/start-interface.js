var Deck = require('./../js/deck.js').deckModule;

$(function() {
  $('#start').submit(function(event) {
    event.preventDefault();
    $('#start').hide();
    var newDeck = new Deck();
    var cards = newDeck.generateCards();
    var shuffledCards = newDeck.shuffleDeck();
    for(var i = 0; i < newDeck.cards.length; i++) {
      if(i < newDeck.cards.length/2) {
        $('#first').append("<td class='fixed'><button name='chosen' value=" + newDeck.cards[i][0] + " class='btn btn-lg chosen text-center'>Card</button></td>");
      } else {
        $('#second').append("<td class='fixed'><button name='chosen' value=" + newDeck.cards[i][0] + " class='btn btn-lg chosen text-center'>Card</button></td>");
      }
    }
  });
});
