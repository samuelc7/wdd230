const key = "36b5b7d508567f61ed1b21c343adb785";

// Get the long and latitude of Rexburg, Idaho 
var cord_url = `https://api.openweathermap.org/geo/1.0/direct?q=rexburg,id,usa&limit=2&appid=${key}`;
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
                const desc = weather["description"].charAt(0).toUpperCase() +  weather["description"].substring(1, weather["description"].length);
                const humidity = main["humidity"];
                const tempK = main["temp"];
                const temp = Math.round(1.8*(tempK-273) + 32);
                const windSpeed = wind["speed"];

                var tempSpan = document.getElementById("temp");
                tempSpan.innerText = temp;

                var windSpeedSpan = document.getElementById("wind-speed");
                windSpeedSpan.innerText = windSpeed;

                var descSpan = document.getElementById("desc");
                descSpan.innerText = desc;

                var weatherIcon = document.getElementById("weather-icon");
                weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${icon}@2x.png`)

                var windChill;
                if (temp <= 50 && windSpeed > 3) {
                    windChill = Math.round(35.74 + (0.6215 * temp) - (35.75 * (windSpeed**.16)) + (0.4275 * (temp * windSpeed**.16)));
                } else {
                    windChill = "N/A";
                }

                document.getElementById("wind-chill").innerText = windChill;   

                // Get information for the 3 day forecast
                var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}`;
                fetch(forecastUrl)
                    .then((res) => {
                        return res.json();
                })
                .then((jsonObject) => {
                    var dayCounter = 0;

                    for (var i = 0; i < 40; i++) {
                        if (dayCounter < 3) {
                            var curr = jsonObject['list'][i];
                            if (curr["dt_txt"].includes("12:00:00")) {
                                console.log(curr);

                                const weather = curr["weather"][0];
                                const main = curr["main"];
                                const wind = curr["wind"];

                                const icon = weather["icon"];
                                console.log(icon);
                                const desc = weather["description"].charAt(0).toUpperCase() +  weather["description"].substring(1, weather["description"].length);
                                const humidity = main["humidity"];
                                const tempK = main["temp"];
                                const temp = Math.round(1.8*(tempK-273) + 32);
                                const windSpeed = wind["speed"];
                                const day = curr["dt_txt"].substring(0, 10);

                                const id = "day" + `${dayCounter + 1}`;

                                var html = `
                                    <div class="day-forecast">
                                        <h3>${day}</h3>
                                        <div class="forecast-content">
                                            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">
                                            <p> ${desc} </p>
                                            <p> Tempurature: ${temp}&deg;</p>
                                            <p> Humidity: ${humidity}</p>
                                            <p> Wind Speed: ${windSpeed}&nbsp;mph</p>
                                        </div>
                                    </div>
                                `

                                var updateMe = document.getElementById(id);
                                updateMe.innerHTML = html;

                                dayCounter++;
                            }
                           
                        }
                    }
                })
            });
        
});

