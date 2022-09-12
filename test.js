"use strict";

const redClick = document.querySelector(".btn--red");
const blueClick = document.querySelector(".btn--blue");
const body = document.querySelector("body");
let displayMessage = document.querySelector(".p1");

const toggleColour = function (colour) {
  body.classList.toggle(colour);
};

redClick.addEventListener("click", function () {
  body.classList.remove("blue");
  toggleColour("red");

  displayMessage.textContent =
    "Congradulation 🎉🎉🎉 You just completed your task. Good luck! 🤞";
});

blueClick.addEventListener("click", function () {
  body.classList.remove("red");
  toggleColour("blue");

  displayMessage.textContent =
    "Congradulation 🎉🎉🎉 You just completed your task. Good luck! 🤞";
});

// redClick.addEventListener("click", function () {
//   body.classList.remove("red");
// });

// document.querySelector(".red").addEventListener("click", function () {
//   document.querySelector("body").style.backgroundColor = "red";
// });

// document.querySelector(".blue").addEventListener("click", function () {
//   document.querySelector("body").style.backgroundColor = "blue";
// });
