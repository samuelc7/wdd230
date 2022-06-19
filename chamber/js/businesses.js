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
    let h2 = document.createElement('h2');
    let p = document.createElement("p");
    let img = document.createElement('img');
    
    h2.textContent = `${business["name"]}`;
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



