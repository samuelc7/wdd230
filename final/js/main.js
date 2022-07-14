
function showMenu() {
    // Layout header for hamburger menu
    let hamburgerMenu = document.getElementById("hamburger");
    const ul = document.querySelectorAll("header ul > li");

    let home = ul[1];
    let temple = ul[2];
    let reservation = ul[3];
    let services = ul[4];

    let menu = document.createElement("div");
    menu.style.display = "flex";
    menu.style.flexDirection = "column";

    menu.appendChild(home);
    menu.appendChild(temple);
    menu.appendChild(reservation);
    menu.appendChild(services);

    hamburgerMenu.appendChild(menu);
    hamburgerMenu.style.display = "block";

    // Make sure that the menu is displayed
    let container = document.querySelector(".hamburger-menu");
    container.style.display = "block";

    let toShow = document.querySelectorAll("header li");
    toShow.forEach( node => { node.style.display = "block"});

    console.log(menu);

}