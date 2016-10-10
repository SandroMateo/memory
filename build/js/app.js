(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/deck.js":1}]},{},[2]);
