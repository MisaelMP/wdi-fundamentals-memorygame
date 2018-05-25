var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("user flipped" + " " + cardsInPlay);

var cardTwo = cards[1];

cardsInPlay.push(cardTwo);

console.log("user flipped" + " " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
  //console.log(cardsInPlay.length);
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again");
  }
}
