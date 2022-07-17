
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

fetch("./data/templeinfo.json")
    .then((response) => {
        return response.json();
    })
    .then(function (jsonObject) {
        let count = [1];
        jsonObject["temples"].forEach(k => showTempleInfo(k, count));


        function showTempleInfo(temple, count) {
            const name = temple["name"];
            const img_loc = temple["img"];
            const address = temple["address"];
            const phone = temple["phone"];
            const email = temple["email"];
            const services = temple["services"];
            const history = temple["history"];
            const schedules = temple["schedules"];

            const templeNum = "temple" + count[0];
            count[0] = count[0] + 1;

            let nameElement = document.getElementById(templeNum + "-name");
            let locationElement = document.getElementById(templeNum + "-location");
            let phoneElement = document.getElementById(templeNum + "-phone");
            let emailElement = document.getElementById(templeNum + "-email");
            let servicesUL = document.getElementById(templeNum + "-services");
            let historyUL = document.getElementById(templeNum + "-history");
            let closuresElement = document.getElementById(templeNum + "-closures");
            let dedicationElement = document.getElementById(templeNum + "-dedication");
            let openHouseElement = document.getElementById(templeNum + "-open-house");
            let imgElement = document.getElementById(templeNum + "-img");

            const locationText = `${address["street"]}\n${address["city state"]}\n${address["country"]}`;
            locationElement.innerText = locationText;
            
            nameElement.innerText = name + " Temple";
            phoneElement.innerText = phone;
            emailElement.innerText = email;
            dedicationElement.innerText = schedules["Dedication"];
            openHouseElement.innerText = schedules["Open House"];
            imgElement.src = img_loc;
            
            services.forEach(s => {
                let listElem = document.createElement("li");
                listElem.innerText = s;
                servicesUL.appendChild(listElem); 
            });

            history.forEach(obj => {
                let listElem = document.createElement("li");
                listElem.innerText = `${obj["date"]} -- ${obj["event"]}`;
                historyUL.appendChild(listElem);  
            }) 

            schedules["Temple Closures"].forEach(i => {
                let listElem = document.createElement("li");
                listElem.innerText = i;
                closuresElement.appendChild(listElem);
            }) 

            // Edit style while here
            locationElement.style.margin = "0px";
            phoneElement.style.margin = "0px";
            servicesUL.style.margin = "0px";
            historyUL.style.margin = "0px";
            closuresElement.style.margin = "0px";
            dedicationElement.style.margin = "0px";
            openHouseElement.style.margin = "0px";

        }
    })

document.querySelectorAll(".accordian-button").forEach(button => {
    button.addEventListener("click", () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle("accordian-button--active");

        if (button.classList.contains("accordian-button--active")) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        } else {
            accordionContent.style.maxHeight = 0;
        }
    });
});