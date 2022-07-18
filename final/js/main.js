
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

function pullForm() {
    window.location.replace("./reservation.html");
}


let key = "36b5b7d508567f61ed1b21c343adb785";
var cord_url = `https://api.openweathermap.org/geo/1.0/direct?q=washington&limit=2&appid=${key}`;
let long;
let lat;

fetch(cord_url)
    .then((response) => {
        return response.json();
    })
    .then((jsonObject) => {
        long = jsonObject[0]["lon"];
        lat = jsonObject[0]["lat"];

        // Fill Weather values
        var weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
                fetch(weather_url)
                    .then((response) => {
                        return response.json();
                    })
                    .then((jsonObject) => {
                        const weather = jsonObject["weather"][0];
                        const main = jsonObject["main"];
                        const wind = jsonObject["wind"];

                        const icon = weather["icon"];
                        const desc = weather["description"].charAt(0).toUpperCase() +  weather["description"].substring(1, weather["description"].length);
                        const humidity = main["humidity"];
                        const tempK = main["temp"];
                        const temp = Math.round(1.8*(tempK-273) + 32);
                        const windSpeed = wind["speed"];

                        let todaysIcon = document.getElementById("todayImage");
                        let todaysTemp = document.getElementById("todayTemp");
                        let todaysCondition = document.getElementById("todayCondition");
                        let todaysHumidity = document.getElementById("todayHumidity");

                        todaysIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                        todaysTemp.innerText = temp;
                        todaysCondition.innerText = desc;
                        todaysHumidity.innerText = humidity;
                    });
                })
                