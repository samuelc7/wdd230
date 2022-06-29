const key = "36b5b7d508567f61ed1b21c343adb785";

// Get the long and latitude of Rexburg, Idaho 
var cord_url = `http://api.openweathermap.org/geo/1.0/direct?q=rexburg,id,usa&limit=2&appid=${key}`;
let long;
let lat;

fetch(cord_url)
    .then((response) => {
        return response.json();
    })
    .then((jsonObject) => {
        long = jsonObject[0]["lon"];
        lat = jsonObject[0]["lat"];

        // Get the current weather of Rexburg
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
                const desc = weather["description"];
                const humidity = main["humidity"];
                const temp = main["temp"];
                const windSpeed = wind["speed"];
    
                console.log(jsonObject);
            });
        
});

