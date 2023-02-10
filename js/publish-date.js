// Handle Publish Date
const dateData = document.getElementById("dateData");
const sinceData = document.getElementById("sinceData");
let publishDate = "2023-02-08";

dateData.textContent = moment(publishDate).format("LL");
sinceData.textContent = moment(publishDate).fromNow();
