"use strict";

let count = 0;
let element = document.getElementById("logo-avatar-container");
let counter = document.getElementById("counter");

element.addEventListener("mouseover", function() {
  count++;
  counter.innerHTML = count;
});