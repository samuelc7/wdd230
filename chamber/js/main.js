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

// button.style.display = "none";

// const menuList = document.querySelector(".menu");

// window.onresize = ()=> {
//     if (window.innerWidth < 800) 
//     button.style.display = "block";
//     if (window.innerWidth > 800) 
//     button.style.display = "none";
// };

// var hamMenu;

// if (window.innerWidth > 800) {
//     if (menuList.children.length == 5) {
//         // remove the hamburger item
//         hamMenu = menuList.children[0];
//         menuList.removeChild(menuList.children[0]);
//     }
// } else {
//     console.log("here");
//     menuList.appendChild(hamMenu);
// }

const menu = document.querySelector(".menu");
console.log(menu.style);


var shown = false;
function showMenu() {
    if (shown) {
        menu.children[0].style = "display: block; margin-top: 1rem;"
        menu.style.display = "flex";
        menu.style.position = "absolute";
        menu.style.marginTop = "3px";
        for (var i = 1; i < menu.children.length; i++) {
            menu.children[i].style.display = "none";
        }
        shown = false;
    } else {
        menu.style = "position: absolute;margin-top: 6rem;"
        menu.children[0].style = "display: block;position: absolute;margin-top: -4rem;margin-left: 2rem;"
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        for (var i = 1; i < menu.children.length; i++) {
            menu.children[i].style.display = "contents";
        }
        shown = true;
    }
}
