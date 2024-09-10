/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let cardId = ["♦", "♥", "♠", "♣"];
  let cardContent = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  function generateRandomCard() {
    // defining random card
    let cardIdIndex = Math.floor(Math.random() * 4);
    let cardContentIndex = Math.floor(Math.random() * 13);
    let cardSelector = cardContent[cardContentIndex];
    let cardStyleSelector = cardId[cardIdIndex];

    //defining color
    let cardColor = cardIdIndex < 2 ? "red" : "black";

    //assigining style
    let cardStyleOutput = document.querySelectorAll(".styleCard");
    cardStyleOutput.forEach(styleCard => {
      styleCard.innerText = cardStyleSelector;
      styleCard.style.color = cardColor;
    });

    //assigning card number or letter
    let output = document.getElementById("content");
    output.innerText = cardSelector;
  }

  generateRandomCard();

  let button = document.getElementById("generator");
  button.addEventListener("click", generateRandomCard);

  //timer to generate random cards every 10 seconds
  function timer() {
    generateRandomCard();
  }

  setInterval(timer, 10000);

  //console.log("Hello Rigo from the console!");
};
