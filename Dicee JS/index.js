var randomNumber = Math.random();
randomNumber = randomNumber * 6;
randomNumber = Math.floor(randomNumber) + 1;
console.log(randomNumber);
var randomDiceImage = "images/dice" + randomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomNumber > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins !!";
} else if (randomNumber2 > randomNumber) {
  document.querySelector("h1").innerHTML = "Player 2 Wins !!";
} else {
  document.querySelector("h1").innerHTML = "Draw !";
}
