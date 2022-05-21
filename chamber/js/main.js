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
element.style.color = "white";

const button = document.getElementById("hamburger");
button.style.display = "none";

window.onresize = ()=> {
    if (window.innerWidth < 800) 
    button.style.display = "block";
    if (window.innerWidth > 800) 
    button.style.display = "none";
};

