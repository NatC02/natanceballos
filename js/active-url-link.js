'use strict'

const links = document.querySelectorAll("nav ul li a");
const currentUrl = window.location.pathname;

console.log("current page " + currentUrl);

links.forEach(function(link) {
  if ((link.getAttribute("href") === currentUrl) ||  
  // or if its the root url map to /index.html instead
  (currentUrl === "/" && link.getAttribute("href") === "/index.html")
  ) {
    // link.className = "";
    // link.classList.add("link-active");
    // link.classList.remove("link:hover");
    // console.log("active link " + link)
    // add a click event listener to the link

    // link.classList.add("link-active","link-active:active");
    link.classList.toggle("link-active");

    link.addEventListener("click", event => {
      event.preventDefault(); // prevent default behavior
    });
  } else {
    link.classList.remove("link-active");
  }
});