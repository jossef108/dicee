var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "./images/dice"+randomNumber1+".png";
var randomImagePath1 = document.querySelectorAll("img")[0];

var randomDiceImage2 = "./images/dice"+randomNumber2+".png";
var randomImagePath2 = document.querySelectorAll("img")[1];


randomImagePath1.setAttribute("src", randomDiceImage1);
randomImagePath2.setAttribute("src", randomDiceImage2);

var titlePath = document.querySelector("h1"); 

if (randomNumber1 == randomNumber2) {
    titlePath.innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    titlePath.innerHTML = "🚩player1 wins";
} else {
    titlePath.innerHTML = "player2 wins🚩"
}