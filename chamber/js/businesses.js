fetch("./json/data.json")
    .then((response) => {
        return response.json();
    })
    .then(function (jsonObject) {
        var businesses = jsonObject["businesses"];
        businesses.forEach(displayBusiness);

function displayBusiness(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    card.className = "mainSections";
    let h2 = document.createElement('h2');
    let p = document.createElement("p");
    let img = document.createElement('img');
    
    h2.textContent = `${business["name"]}`;
    h2.style.marginLeft = "20px";
    p.innerHTML = `${business["address"]} <br>${business["phone_number"]} <br>${business["website"]}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    img.setAttribute('src', business["icon"]);
    img.setAttribute('alt', 'Image of ' + business["name"] + '\'s logo');
    img.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}});


function toggleList() {
    var sections = document.getElementsByTagName("section");
    var cardSections = document.getElementsByClassName("mainSections");
    var cards = document.getElementsByClassName("cards");
    var h2 = document.querySelectorAll(".cards h2");
    var counter = 0;

    Array.from(h2).forEach((a) => a.style.marginLeft = "20px");
    Array.from(cards).forEach((card) => {card.style.display = "block"});
    Array.from(cardSections).forEach((section) => {
        section.style.justifyContent = "normal";
        if (counter % 2 == 0) {
            section.style.boxShadow = "0 0 10px rgb(7 95 7)";
        } else {
            section.style.boxShadow = "0 0 10px rgb(14 14 14)";
        }
        counter = counter + 1;
    })
    
    Array.from(sections).forEach((section) => {
        var img = section.getElementsByTagName("img")[0];
        img.style.display = "none";
        section.style.display = "flex";
        section.style.flexDirection = "row";

        var p = section.querySelector("p");
        

        if (p != null) {
            var pElems = p.innerHTML.split("<br>");
            var address = pElems[0];
            var number = pElems[1];
            var website = pElems[2];

            var addressDiv = document.createElement("div");
            var numberDiv = document.createElement("div");
            var websiteDiv = document.createElement("div");

            addressDiv.innerText = address;
            numberDiv.innerText = number;
            websiteDiv.innerText = website;

            if (window.innerWidth > 800) {
                addressDiv.style.padding = "10px";
                addressDiv.style.marginLeft = "10rem";
                numberDiv.style.padding = "10px";
                websiteDiv.style.padding = "10px";    
            } else {
                addressDiv.style.padding = "5px";
                addressDiv.style.marginLeft = "3px";
                numberDiv.style.padding = "5px";
                websiteDiv.style.padding = "5px";
            }

            section.removeChild(p);
            section.appendChild(addressDiv);
            section.appendChild(numberDiv);
            section.appendChild(websiteDiv);

        } else {
            Array.from(section.querySelectorAll("div"))[0].style.marginLeft = "7rem";
        }
    });


}

function toggleGrid() {
    var sections = document.getElementsByTagName("section");
    var cardsDiv = document.querySelector(".cards");
    var names = cardsDiv.querySelectorAll("h2");
    Array.from(names).forEach((name) => name.style.marginLeft = "0px");

    cardsDiv.style.display = "grid";
    Array.from(sections).forEach((section) => {
        var img = section.getElementsByTagName("img")[0];
        img.style.display = "block";
        section.style.flexDirection = "column";
        section.style.boxShadow = "box-shadow: 0 0 10px rgb(32, 32, 30)";

        Array.from(section.querySelectorAll("div")).forEach((i) => {
            i.style.marginLeft = "0px";
        });
    });
}
