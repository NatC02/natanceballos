'use strict'

const links = document.querySelectorAll("li a");
const currentUrl = window.location.pathname;

console.log("current page " + currentUrl);

links.forEach(function(link) {
  if ((link.getAttribute("href") === currentUrl) ||  
  // or if its the root url map to /index.html instead
  (currentUrl === "/" && link.getAttribute("href") === "/index.html")
  ) {
    link.className = "";
    // link.classList.add("link-active");
    // link.classList.remove("link:hover");
    // console.log("active link " + link)
    // add a click event listener to the link

    link.classList.add("link-active","link-active:active");

    link.addEventListener("click", event => {
      event.preventDefault(); // prevent default behavior
      // add a class to the link
    });
  } else {
    link.classList.remove("link-active");
  }
});