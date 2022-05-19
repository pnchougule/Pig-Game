"use strict";

let random = 1;
let sum = 0;
let flag = true;
let holdP1Score, holdP2Score;
let p1FinalScore = 0;
let p2FinalScore = 0;
let btnRollDice = document.getElementById("btnRollDice");
let diceImg = document.getElementById("dice-img");
let currentP1Score = document.getElementById("currentP1Score");
let currentP2Score = document.getElementById("currentP2Score");
let totalP1Score = document.getElementById("totalP1Score");
let totalP2Score = document.getElementById("totalP2Score");
let hold = document.getElementById("hold");
let refresh = document.getElementById("refresh");

btnRollDice.addEventListener("click", function () {
  random = Math.floor(Math.random() * 6 + 1);

  if (random == 1) {
    diceImg.src = "dice-1.png";
  } else if (random == 2) {
    diceImg.src = "dice-2.png";
  } else if (random == 3) {
    diceImg.src = "dice-3.png";
  } else if (random == 4) {
    diceImg.src = "dice-4.png";
  } else if (random == 5) {
    diceImg.src = "dice-5.png";
  } else if (random == 6) {
    diceImg.src = "dice-6.png";
  }

  sum += random;
  if (flag) {
    if (random == 1) {
      flag = false;
      totalP1Score.textContent = sum - 1;
      sum = 0;
      currentP1Score.textContent = 0;
    } else {
      currentP1Score.textContent = sum;
    }
  } else {
    if (random == 1) {
      flag = true;
      totalP2Score.textContent = sum - 1;
      sum = 0;
      currentP2Score.textContent = 0;
    } else {
      currentP2Score.textContent = sum;
    }
  }
});

refresh.addEventListener("click", function () {
  random = 0;
  sum = 0;
  flag = true;
  diceImg.src = "dice-1.png";
  currentP1Score.textContent = "0";
  currentP2Score.textContent = "0";
  totalP1Score.textContent = "";
  totalP2Score.textContent = "";
});

hold.addEventListener("click", function () {
  if (flag) {
    p1FinalScore = p1FinalScore + sum;
    sum = 0;
    flag = false;
    currentP1Score.textContent = "0";
    totalP1Score.textContent = p1FinalScore;
  } else {
    p2FinalScore = p2FinalScore + sum;
    sum = 0;
    flag = true;
    currentP2Score.textContent = "0";
    totalP2Score.textContent = p2FinalScore;
  }
});
