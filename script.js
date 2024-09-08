"use strict";

let input = document.getElementById("name");
let textLengthElement = document.querySelector(".text-length");
let upperCaseElement = document.querySelector(".upper-case");
let lowerCaseElement = document.querySelector(".lower-case");

function updateInfo() {
  let text = input.value;
  textLengthElement.textContent = getTextLength(text);
  upperCaseElement.textContent = upperCasedText(text);
  lowerCaseElement.textContent = lowerCasedText(text);
}

input.addEventListener("input", updateInfo);

function getTextLength(text) {
  return text.length;
}

function upperCasedText(text) {
  return text.toUpperCase();
}

function lowerCasedText(text) {
  return text.toLowerCase();
}

updateInfo();
