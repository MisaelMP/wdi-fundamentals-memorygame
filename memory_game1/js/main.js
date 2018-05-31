//An array to store all the card objects
var cards = [{
    card: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    card: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    card: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    card: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
//An array to store all the cards in play
var cardsInPlay = [];
//A function to check for a match
var checkForMatch = function() {
  //check to see of two cards match and give feedback
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again");
  }
};
//function for flipping the card
var flipCard = function() {
  cardId = this.getAttribute("data-id");
  console.log(cardId);

  //method to add the card to array in play
  cardsInPlay.push(cards[cardId].card);

  //card image
  this.setAttribute("src", cards[cardId].cardImage);

  //check to see if we have two cards have been played
  if (cardsInPlay.length === 2) {
    //console.log(cardsInPlay.length);
    //see if cards match
    checkForMatch();
    cardInPlay = [];
  }
};

//function to create game board
var createBoard = function() {
  //loop through cards array and create board
  for (var i = 0; i < cards.length; i++) {
    //create image element as a card
    var cardElement = document.createElement("img");
    //Set src attribute to display the back of the card
    cardElement.setAttribute("src", "images/back.png");
    //data- attribute as the index
    cardElement.setAttribute("data-id", i);
    //Event listener when card is clicked the card is flipped
    cardElement.addEventListener("click", flipCard);
    //Append card to board
    document.getElementById("game-board").appendChild(cardElement);
  }

}
//Invoke board
createBoard();

//call object by id and trigger message on click, if confirmed, reload
document.querySelector("#reset").addEventListener("click", function refreshPage() {
  if (confirm("are you sure?")) {
    // reload confirmed
    window.location.reload();
  }
})
