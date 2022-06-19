var temp = document.getElementById("temp").innerHTML;
var windSpeed = document.getElementById("wind-speed").innerHTML;
var windChill;
if (temp <= 50 && windSpeed > 3) {
    windChill = Math.round(35.74 + (0.6215 * temp) - (35.75 * (windSpeed**.16)) + (0.4275 * (temp * windSpeed**.16)));
} else {
    windChill = "N/A";
}

document.getElementById("wind-chill").innerText = windChill;   