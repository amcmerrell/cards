$(document).ready(function() {
  var suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
  var ranks = ["Ace", 2,3,4,5,6,7,8,9,10, "Jack", "Queen", "King"];
  var cards = [];
  var i = 0;

  ranks.forEach(function(rank) {
    $("ul").append("<li>" + rank + " of " + suits.forEach(function(suit) {
      suits[i];
      i++;
    }) + "</li>");
  });

});
