/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cardsValues = ["2", "3", "4", "8", "6", "J"];
  let cardsTypes = ["♦", "♥", "♠", "♣"];
  let cardValueElement = document.getElementById("cardValue");
  let cardTypeTopElement = document.getElementById("cardTypeTop");
  let cardTypeBottomElement = document.getElementById("cardTypeBottom");

  function getRandomCard() {
    let randomValueIndex = Math.floor(Math.random() * cardsValues.length);
    let randomValue = cardsValues[randomValueIndex];
    let randomTypesIndex = Math.floor(Math.random() * cardsTypes.length);
    let randomTypes = cardsTypes[randomTypesIndex];
    cardTypeBottomElement.textContent = randomTypes;
    cardTypeTopElement.textContent = randomTypes;
    cardValueElement.textContent = randomValue;

    if (randomTypes == "♥") {
      cardTypeBottomElement.style.color = "red";
      cardTypeTopElement.style.color = "red";
    }
  }
  getRandomCard();
};
