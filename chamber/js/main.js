var element = document.getElementById("time");
var date = new Date();
var days = [
    "Sunday",
    "Monday",
    "Tuesday", 
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

var formattedDate = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
element.innerHTML = formattedDate;

var button = document.getElementById("hamburger");
button.style.display = "block";
var nav = document.querySelector("nav");
button.addEventListener("click", ()=>  {
    nav.classList.toggle('responsive')},
    false);

window.onresize = ()=> {
    if (window.innerWidth > 760) 
    nav.classList.remove("responsive")
};