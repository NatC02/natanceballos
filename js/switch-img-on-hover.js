"use strict";

var defaultImage = document.getElementById("default-image");
var hoverImage = document.getElementById("hover-image");

defaultImage.addEventListener("mouseover", function() {
  hoverImage.style.display = "block";
  defaultImage.style.display = "none";
});

hoverImage.addEventListener("mouseout", function() {
  defaultImage.style.display = "block";
  hoverImage.style.display = "none";
});