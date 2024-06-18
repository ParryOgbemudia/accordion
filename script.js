"use strict";

const accordion = document.querySelector(".accordion");
const icon = document.querySelector(".icon");

accordion.addEventListener("click", function (e) {
  e.target.classList.toggle("hidden");
});
