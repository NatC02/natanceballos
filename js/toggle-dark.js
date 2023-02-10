"use strict";

let currentImg = localStorage.getItem("currentImg") || "imgLight";

const elementsToToggle = document.querySelectorAll("[toggle-dark]");
const imgLight = document.querySelectorAll("[imgLight]");
const imgDark = document.querySelectorAll("[imgDark]");

const checkbox = document.getElementById("floating-checkbox");

checkbox.checked = localStorage.getItem("darkMode") === "true";

checkbox.addEventListener("change", function (event) {
  localStorage.setItem("darkMode", event.currentTarget.checked);
  toggleDarkMode();
  toggleSwitchImg();
});

function toggleDarkMode() {
  for (const element of elementsToToggle) {
    if (element.hasAttribute("toggle-dark")) {
      element.removeAttribute("toggle-dark");
    } else {
      element.setAttribute("toggle-dark", "");
    }
  }
  toggleSwitchImg();
}

function toggleSwitchImg() {
    if (localStorage.getItem('darkMode') === 'true') {
        currentImg = 'imgDark';
        imgLight.forEach(img => img.classList.remove('active-img'));
        imgDark.forEach(img => img.classList.add('active-img'));
    } else {
        currentImg = 'imgLight';
        imgDark.forEach(img => img.classList.remove('active-img'));
        imgLight.forEach(img => img.classList.add('active-img'));
    }
    localStorage.setItem('currentImg', currentImg);
}

