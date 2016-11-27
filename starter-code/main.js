console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


  //if (cardTwo === cardFour) {
    alert("Sorry, try again.");
  } else {
    alert("You found a match!");

  }

var board = document.getElementById('game-board');

function createCards() {

  for (var i=0; i<cards.length; i++) {
    
    var cardElement = document.createElement('div');
    
    cardElement.className = 'card';
    
    board.appendChild(cardElement);
  }

}

createCards();
