document.getElementById("last-modified").textContent = document.lastModified;


const todaysDate = new Date();
const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-US", options)
