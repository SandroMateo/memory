var Deck = require('./../js/deck.js').deckModule;

$(function() {
  var counter = 0;
  var matched = 0;
  var cardOne = 0;
  var cardTwo = 0;
  $("tr").on("click", ".chosen", function() {
    counter++;
    var deck = new Deck();
    if (counter % 2 == 1) {
      $('.chosen').text("Card").prop('disabled', false);
      cardOne = $(this).val();
      $(this).text(cardOne).addClass("clicked").prop('disabled', true);
    } else {
      cardTwo = $(this).val();
      $(this).text(cardTwo).addClass("clicked").prop('disabled', true);
      if(cardOne == cardTwo) {
        $(".clicked").slideUp(3000);
        matched++
        if(deck.winEvaluation(matched)) {
          $('#start').show();
          matched = 0;
          counter = 0;
        }
      } else {
        $(".clicked").removeClass("clicked");
      }
    }
  });
});

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
