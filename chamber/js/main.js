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

const menu = document.querySelector(".menu");
const timeP = document.querySelector("header p");
console.log(menu.style);


var shown = false;
function showMenu() {
    if (shown) {

        // Set the time paragraph back into place
        timeP.style = "\
        text-align: center;\
        background-color: #3a2b3d;\
        border-radius: 0.25rem;\
        margin-top: 41px;\
        margin-left: -16rem;\
        padding-right: 5rem;\
        padding-left: 5rem;\
        max-width: 330px;\
        position: absolute;\
        ";

        menu.children[0].style = "display: block; margin-top: 1rem;"
        menu.style.display = "flex";
        menu.style.position = "absolute";
        menu.style.marginTop = "3px";
        for (var i = 1; i < menu.children.length; i++) {
            menu.children[i].style.display = "none";
        }
        console.log("here");
        menu.style = "background-color: none;";
        shown = false;
    } else {
        // Set the time paragraph in the correct spot
        timeP.style.marginTop = "51px";
        timeP.style.marginLeft = "-18rem";

        menu.style = "position: absolute;margin-top: 6rem; padding-right: 4.75rem; padding-bottom: 10rem; padding-top: .5rem; background-color: #1E152A; z-index: 1;" ;
        menu.children[0].style = "display: block;position: absolute;margin-top: -4rem;margin-left: 2rem;"
        menu.style.display = "flex";
        menu.style.flexDirection = "row";
        var marginCount = 0;
        for (var i = 1; i < menu.children.length; i++) {
            menu.children[i].style.display = "block";
            menu.children[i].style.backgroundColor = "lightgray";
            menu.children[i].style.width = "7rem";
            menu.children[i].style.textAlign = "center";
            menu.children[i].style.marginTop = marginCount + "rem";
            menu.children[i].style.padding = "2px";
            menu.children[i].style.position = "inherit";
            menu.children[i].style.marginLeft = "-3rem";
            marginCount += 2;
        }
        const hover = document.querySelector(".menu li:hover");
        hover.style.backgroundColor = "white";
        shown = true;
    }
}

// Only show the join button on mondays and tuesdays only
const joinButton = document.querySelector(".join")
if (joinButton) {
    if (days[date.getDay()] == "Monday" || days[date.getDay()] == "Tuesday") {
        joinButton.style.display = "block";
    } else {
        joinButton.style.display = "none";
    }
}
function toJoinField() {
    window.location.href = "../join.html"
}


const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions)

images.forEach(image => {
    imgObserver.observe(image);
})

// Get the amount of days since last vist
const daysSpan = document.getElementById("number-of-days");

if (daysSpan) {
    let lastVisitedDate = new Date(window.localStorage.getItem("last-visited-date"));
    let now = new Date();

    if (lastVisitedDate) {
        let diffInMilliseconds = now - lastVisitedDate;
        let secs = diffInMilliseconds / 1000;
        let days = Math.floor(secs / 86400);
        daysSpan.innerText = days;
    }
    window.localStorage.setItem("last-visited-date", now);
}

const formTime = document.getElementById("date");
if (formTime != null) {
    formTime.innerHTML = formattedDate;
}