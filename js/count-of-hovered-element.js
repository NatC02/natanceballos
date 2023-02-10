element.addEventListener("mouseover", function() {
  count++;
  counter.textContent = count;
  localStorage.setItem("count", count);
  let i = 0;
  elementsToShow[i].style.visibility = "visible";
  element.addEventListener("mouseover", function(){
    i++;
    if (i < elementsToShow.length) {
      elementsToShow[i].style.visibility = "visible";
    }
  });
});
