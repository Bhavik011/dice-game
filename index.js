var randomNumber = Math.floor(Math.random() * 6) + 1;
var link = "images/dice" + randomNumber + ".png";

document.querySelector(".img1").setAttribute("src", link);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var link2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", link2);

if (randomNumber == randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
} else if (randomNumber > randomNumber2) {
  document.querySelector("h1").textContent = "🚩Player 1 Wins!"
} else {
  document.querySelector("h1").textContent = "🚩Player 2 Wins!"
}
