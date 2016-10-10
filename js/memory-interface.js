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
